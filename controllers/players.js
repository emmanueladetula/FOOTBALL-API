const {faker}=require("@faker-js/faker");
const createRandomPlayers = (num, teamName) => {

    const user = [];

    for (let i = 0; i < num; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const age = faker.number.int({ min: 18, max: 40 });
      const country = faker.location.country();

      const position = faker.helpers.arrayElement([

        "goalKeeper",
        "defender",
        "midfielder",
        "attacker",

      ]);
      const imageUrl = faker.image.avatar();

      user.push({

        firstName,
        lastName,
        age,
        country,
        position,
        imageUrl,
        teamName,
      });
    }

    return user;
  };
  module.exports = createRandomPlayers;