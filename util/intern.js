const Employee = require("./employee")

class Intern extends Employee {
    constructor (name, email, id, school) {
        super(name, email, id);
        this.school = school;
        this.title = "Intern";
    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    };
    getRole(){
        return this.title;
    };
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;