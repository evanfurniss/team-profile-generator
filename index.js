const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const employee = require("./util/constructors")
const manager = require("./util/constructors")
const engineer = require("./util/constructors")
const intern = require("./util/constructors")


inquirer
  .prompt() [
    {
      type: "input",
      message: "Enter your full name",
      name: "name"
    },
    {
      type: "input",
      message: "Enter your employee ID",
      name: "id"
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email"
    }
  ]