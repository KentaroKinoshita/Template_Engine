const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function askQuestion() {
    inquirer
    .prompt([{
        name: "name",
        type: "input",
        message: "Input your name"
    },
    {
        name: "id",
        type: "input",
        message: "Input your id"
    },
    {
        name: "email",
        type: "input",
        message: "Input your eamil address"
    },
    {
        name: "role",
        type: "list",
        message: "Select your role",
        choices: ["Engineer", "Intern", "Manager"]
    }
]).then(function({name, id, email, role}) {
    switch (role) {
        case "Engineer":
            inquirer
            .prompt({
                name: "github",
                type: "input",
                message: "Input your github account"
            }).then(function({github}) {
                console.table({name, id, email, github})
                render({name, id, email, github})
            })
            break
        case "Manager":
            inquirer
            .prompt({
                name: "officeNumber",
                type: "input",
                message: "Input your office number"
            }).then(function({officeNumber}){
                renderManager(name, id, email, officeNumber)
                console.log({name, id, email, officeNumber})
            })
            break
        case "Intern":
            inquirer
            .prompt({
                name: "school",
                type: "input",
                message: "Input your school"
            }).then(function({school}){
                renderIntern(name, id, email, school)
                console.log({name, id, email, school})
            })
            break
    }
})
}

askQuestion();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
