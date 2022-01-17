/* eslint-disable no-unused-vars */
var person = {
  firstName: 'Bingle',
  lastName: 'Padilla',
  hobby: 'Cooking'
};

console.log(person);

var firsName = 'Bingle';
var lastName = ' Padilla';
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Software Engineer';
console.log("The person's current job is:", person.job);

person.previousJob = 'Licensed Vocational Nurse';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
console.log();
