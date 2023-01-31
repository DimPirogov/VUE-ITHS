// const process = require('process')

// console.log(`Välkommen till Blackjack, ${process.argv[process.argv.length - 1]}!`);

// const minimist = require('minimist')

// console.log(minimist());
var argv = require('minimist')(process.argv.slice(2));
console.log(`Player: ${argv.name}; Credits: ${argv.c}`);
