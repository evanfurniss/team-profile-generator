const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./util/employee")
const Manager = require("./util/manager")
const Engineer = require("./util/engineer")
const Intern = require("./util/intern")

let teamArr = [];

init();

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter a name for your new team",
        name: "teamName"
      }
    ])
    .then( (data) => {
      teamArr.push(data.teamName);
      addManager();
    })
};

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
        message: "Enter manager's email",
        name: "email"
      },
      {
        type: "input",
        message: "Enter manager's ID",
        name: "id"
      },
      {
        type: "number",
        message: "Enter manager's office number",
        name: "officeNum"
      }
    ])
    .then( (data) => {
      const name = data.name
      const email = data.email
      const id = data.id
      const officeNum = data.officeNum

      const genManager = new Manager(name, email, id, officeNum);
      teamArr.push(genManager)
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
          createRoster();
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
      const email = data.email
      const id = data.id
      const github = data.github
      
      const engineer = new Engineer(name, email, id, github);
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

      const intern = new Intern(name,email, id, school);
      teamArr.push(intern);
      addTeamMember();
    })
}

function createRoster(){

}