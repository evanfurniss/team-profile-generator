const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
        this.title = "Engineer";
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
}

module.exports = Engineer;