// console.log('lets get started!')
// ran npm init + npm install inquirer

// declare variables
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path')
const md = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// 1 - ask inquierer
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Hi there,  what is your name?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title?',
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
        type: 'list',
        name: 'license',
        message: 'Please provide the licensing used for your project:',
        choices: ['MIT', 'Apache', 'GNU', 'BSD', 'Mozilla']
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            console.log(responses)
            writeToFile('GenREADME.md', generateMarkdown({...responses}))
        })
}

// Function call to initialize app
init();


