// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Enter tile of project"
    },

    {
        type:"input",
        name:"description",
        message:"Enter project description"
    },
    
    {
        type: "input",
    name: "installation",
    message: "Describe the installation process if any ",
    },

    {
    type: "input",
    name: "usage",
    message: "What is this projects usage"
    },

    {
        type:"list",
        name:"license",
        message:"what license are you using?",
        choices:["mit","bsd","gpl"]
    },

    {

    type: "input",
    name: "contributing",
    message: "Who contributed in the project?"
    },

    {
    type: "input",
    name: "tests",
    message: "Is there a test included?"
    },

    {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
    },

    {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
    },

    {
    type: "input",
    name: "email",
    message: "Please enter your email: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname,"/examples/",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        writeToFile("README.md",generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
