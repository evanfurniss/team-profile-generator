const Employee = require("./employee")

class Intern extends Employee {
    constructor (name, email, id, school) {
        super(name, email, id);
        this.school = school;
        this.title = "Intern";
    }
}

module.exports = Intern;