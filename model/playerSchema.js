const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({

  firstName: {

    type: String,

    required: true,


  },
  lastName: {

    type: String,

    required: true,

  },

  country: {

    type: String,

    required: true,

  },
  age: {

    type: String,

    required: true,
  },

  position: {

    type: String,

    required: true,


  },
  image: {

    type: String,


  },
  teamName: {

    type: String,

    required: true,

 },

  playerValue: {

    type: Number,

    default: 1000000,

  },
  transferList: {

    type: Boolean,

    default: false,

  },

  transferPrice: {

    type: Number,

    default:0,

  },


});



module.exports.player = new mongoose.model("player", playerSchema);

