const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./util/manager")
const Engineer = require("./util/engineer")
const Intern = require("./util/intern")
const generateHTML = require("./util/page-template")

let teamArr = [];

addManager();

// function init() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Please enter a name for your new team",
//         name: "teamName"
//       }
//     ])
//     .then( (data) => {
//       teamArr.push(data.teamName);
//       addManager();
//     })
// };

function addManager(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter manager's name",
        name: "name"
      },
      {
        type: "input",
        message: "Enter manager's ID",
        name: "id"
      },
      {
        type: "input",
        message: "Enter manager's email",
        name: "email"
      },
      {
        type: "number",
        message: "Enter manager's office number",
        name: "officeNumber"
      }
    ])
    .then( (data) => {
      const name = data.name
      const id = data.id
      const email = data.email
      const officeNumber = data.officeNumber

      const manager = new Manager(name, id, email, officeNumber);
      teamArr.push(manager)
      addTeamMember();
    })
};

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "No more to add"],
        name: "memberMaker"
      }
    ])
    .then((data) => {
      switch (data.memberMaker){
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "No more to add":
          writeToFile();
          break;
      }
    })
}

function addEngineer(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter employee's full name",
        name: "name"
      },
      {
        type: "input",
        message: "Enter employee's email address",
        name: "email"
      },
      {
        type: "input",
        message: "Enter employee's ID",
        name: "id"
      },
      {
        type: "input",
        message: "Enter employee's GitHub username",
        name: "github"
      }
    ])
    .then((data) => {
      const name = data.name
      const id = data.id
      const email = data.email
      const github = data.github
      
      const engineer = new Engineer(name, id, email, github);
      teamArr.push(engineer);
      addTeamMember();
    })
}

function addIntern(){
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter intern's full name",
        name: "name"
      },
      {
        type: "input",
        message: "Enter intern's email address",
        name: "email"
      },
      {
        type: "input",
        message: "Enter intern's ID",
        name: "id"
      },
      {
        type: "input",
        message: "Enter intern's school",
        name: "school"
      }
    ])
    .then((data) => {
      const name = data.name
      const email = data.email
      const id = data.id
      const school = data.school

      const intern = new Intern(name, id, email, school);
      teamArr.push(intern);
      addTeamMember();
    })
}

function writeToFile() {
  fs.writeFile("teamRoster.html", generateHTML(teamArr), err => {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  })
}