var express = require('express');
var router = express.Router();

const { faker } = require('@faker-js/faker');


function createRandomUser(){
    return {
      // userId: faker.string.uuid(),
      // username: faker.internet.userName(),
      // email: faker.internet.email(),
      // password: faker.internet.password(),
      // birthdate: faker.date.birthdate(),
      // registeredAt: faker.date.past(),
      profilePicture: faker.image.urlLoremFlickr({ category: 'people' }),
      name: faker.person.fullName(),
      phone:faker.phone.number('+20 1# #### ####'),
      rating:Math.ceil(Math.random()*5),
      description:faker.word.words({ count: { min: 20, max: 30 } })
    };
  }

router.get("/MockApi",(req,res)=>{
    const USERS = faker.helpers.multiple(createRandomUser, {
        count: 5,
      });
      res.send(USERS)
    console.log(USERS)

})







module.exports = router;