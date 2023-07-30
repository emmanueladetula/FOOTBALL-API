const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const {register}=require("../model/registerSchema");
const {registrationSchema}=require("../validator/registration");
const {StatusCodes}  = require("http-status-codes");
const { team } = require("../model/teamSchema");
const {player} = require("../model/playerSchema");
const createRandomPlayers = require('./players')

module.exports.createUser = async (req, res)=>{
     const {error,value} = registrationSchema(req.body)
     if( error ) return  res.status(StatusCodes.NOT_ACCEPTABLE).json({error});
     try{
        const userExist=await register.findOne({email: value.email});
        if(userExist){
            res.status(StatusCodes.FORBIDDEN).send("existing user");
        }
        else{
        const salt=await bcrypt.genSalt()
        const hashedPassword=await bcrypt.hash(value.password, salt)
        const user =new register({
            userName : value.userName,
            email : value.email ,
            password :hashedPassword,

        })
    let newUser = await user.save()
    if(newUser) {
        const teams = new team({
           teamName: value.teamName,
           country:value.country,
           playerId:[],
        })
        const existingTeam = await team.findOne({teamName:value.teamName})
        if(existingTeam){
            res.status(StatusCodes.METHOD_NOT_ALLOWED).send("existing team already")
        }
        const newTeams = await teams.save()
        if (newTeams){
            const Player= createRandomPlayers(20, value.teamName)
            const players= await player.insertMany(Player)
            if(players) {
                for(let Player of players ){
                    await teams.updateOne({_id: newTeams._id},{$addToSet: {playerId: Player._id}})
                }
            }
        }
    }
        res.status(StatusCodes.CREATED).send("user created successfully")

        }
     }catch(error){
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).send("user creation failed")
     }

}