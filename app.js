const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Kuba', 'Joe', 'Martin', 'Felix', 'Brunon', 'Olo']
const femaleNames = ['Samatha', 'Anya', 'Kaya', 'Ala', 'Sonia', 'Lisa']
const lastNames = ['Smith', 'Kowalsky', 'Maciazovski', 'Wayne', 'Lanisek']

const randChoice = function(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i=0; i<35; i++) {
  const onePerson = {};

  const personGender = randChoice(genders);
  onePerson.gender = personGender;
  if ( personGender === 'M') {
    onePerson.firstName = randChoice(maleNames)
  } else {
    onePerson.firstName = randChoice(femaleNames);
  }

  onePerson.lastName = randChoice(lastNames);
  onePerson.age = Math.floor(Math.random() * 60) + 18;

  people.push(onePerson);
};

const json = JSON.stringify(people);

fs.writeFile('people.json', json, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The file has been saved!');
});