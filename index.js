// console.log('lets get started!')
// ran npm init + npm install inquirer

// declare variables
const inquirer = require('inquirer');
const fs = require('fs')

// 1 - ask inquierer
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Hi there,  what is your name?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description about your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What will users need to install your code?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How are users supposed to use your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users test the code?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: "How can users contribute to the project's code?",
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub profile?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email?',
    },
    {
        type: 'input',
        name: 'licensing',
        message: 'Please provide the licensing used for your project:',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


