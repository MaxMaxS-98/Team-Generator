const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require("./src/template");

const teamMembers = [];

function startApp() {
    function createEmployees(){ 
        inquirer.prompt([
            {
                type: "list",
                name: "addEmployeePrompt",
                message: "Which type of team member would you like to add?",
                choices: [ "Engineer", "Intern", "No more team members"]
            }]).then(function({userInput}) {
                switch (userInput.addEmployeePrompt) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    case "Manager":
                        addManager();
                        break;
                    case "No more team members":
                        buildTeam();
                        break;
                    default:
                        buildTeam();
                }
            })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's github username?",
            }
        ]).then(function({engineerName, engineerId, engineerEmail, engineerGithub}) {
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
            teamMembers.push(engineer);
            createEmployees();
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's id?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school?",
            }
        ]).then(function({internName, internId, internEmail, internSchool}) {
            const intern = new Intern(internName, internId, internEmail, internSchool);
            teamMembers.push(intern);
            createEmployees();
        })
    }
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
            }
        ]).then(function({managerName, managerId, managerEmail, managerOfficeNumber}) {
            const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
            teamMembers.push(manager);
            createEmployees();
        })
    }

    function buildTeam() {
         console.log(teamMembers);

         fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }
    createEmployees();
}

startApp();
    