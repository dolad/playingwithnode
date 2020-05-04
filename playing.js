const fs = require('fs');


// const names ={
//     firstname:'david',
//     lastname: 'oladele'
// };

// namesJson = JSON.stringify(names);

// fs.writeFileSync('name.json', namesJson);

const nameBuffer = fs.readFileSync('name.json');
const resultJson = nameBuffer.toString();
let data = JSON.parse(resultJson);
data.name = "David";
data.age = 34;

dataJson = JSON.stringify(data);

fs.writeFileSync('name.json', dataJson);

// another plalying level

const validator = require('validator');
const chalk = require('chalk');

// fs.writeFileSync('note.txt','this is a first message');

// fs.appendFileSync('note.txt', ' /n this is a second mesesage and i would love to add it to the', (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
//   });

console.log('validating', validator.isEmail('dolad'));
// console.log('chaik', chalk.green('success'));
const log = console.log;
log(chalk.green('success') + chalk.red('falis'));


console.log(data);


