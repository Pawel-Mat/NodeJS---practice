const fs = require('fs');
const {gender, femaleNames, maleNames, lastNames} = require('./store');

const randChoise = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for(let i = 0; i < 21; i++) {

  randGender = randChoise(gender);
  randName = randGender == 'male' ? randChoise(maleNames) : randChoise(femaleNames);
  randLastName = randChoise(lastNames);
  randAge = 18 + Math.floor((78 - 18) * Math.random());
  
  people.push({
    gender: randGender,
    firstName: randName,
    lastName: randLastName,
    age: randAge
  });
}


const peopleJsonString = JSON.stringify(people, null, ' ');

fs.writeFile('people.json', peopleJsonString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});