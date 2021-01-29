# Team Profile Generator



## Table of Contents
* [Installation](#installation)
* [Description](#discription)
* [Contribution](#contribution)
* [Contact](#contact)


## Installation

To run the program, users are required to install 'inquirer'. Optionally, if users would like to run the tests included in this program, they will need to install 'jest'. You will install both using the following on the index.js:

    npm i

To run the program users will do one of two things in the integrated terminal associated with the index.js:

    start

or:

    node index.js

Provided all npm files were correctly installed, you can run the test function by calling the following in an integrated terminal:

    npm test


## Description

The team profile generator project allows teams to create an HTML file that displays all members of the team, their work ID numbers, and email addresses. Managers also display office number, engineers also display their GitHub username that links to their GitHub profile, and interns display their University/College name. When the user initiates the program, the terminal will provide them with options to add certain team members with specific roles within the organization. Then the user will be prompted to enter the name, email, id for each employee. In addition, managers will be asked for their room number, engineers with their GitHub username, and interns with their school name. When all of the necessary information is collected, the program will create an html file that hosts a list of users, their role, id, email, and additional necessary information with active links for those few items that can be clicked.

The technology behind it uses class constructors, a dynamically created HTML file, and node functions. The NPM inquirer was used parallel with node.js to retrieve user input without needing an html interface. When the user runs the phrase 'start' in the integrated terminal for that file, inquirer will prompt them with questions. Functions will gather necessary information and send that information to the necessary reciever. The manager class is the first to be created, and only one is created. A new function triggers when that newly constructed object is pushed to an array that holds all employees. The user will be asked if more team members need to be added and run through the creation function for that type of employee. Otherwise, fs.writeFile allows us to create a new HTML file created using the information passed into it by 'inquirer'.


## Contribution

If you think you can add functionality to this project, see a bug, or have styling suggestions, please feel free to message me through one of my contact options listed below.



# Contact

* Email: evanfurniss@gmail.com
* LinkedIn: https://www.linkedin.com/in/evan-furniss-03894b1bb/
* GitHub: https://github.com/evanfurniss

## Demo

Check out the file demo video here: https://drive.google.com/file/d/17TjyWUBH7aeWmtiy82z2ow4l65PhWrWe/view

![GIF version of the full video](./util/gif/demo.gif)