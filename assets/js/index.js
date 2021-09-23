// console.log('lets get started!')
// ran npm init + npm install inquierer

// declare variables
const inquierer = require('inquirer');
const fs = require('fs')


// 1 - ask inquierer
const questions = ([
    {
        type: 'input',
        name: 'name',
        message: 'Hi there,  what is your name?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please provide a brief description about your project:',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What will users need to install your code?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'How are users supposed to use your project?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'How can users test the code?',
    },
    {
        type: 'input',
        name: 'name',
        message: "How can users contribute to the project's code?",
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub profile?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your contact email?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please provide the licensing used for your project:',
    },
])


// 2 - append to HTML with template literals


// 3 - write file