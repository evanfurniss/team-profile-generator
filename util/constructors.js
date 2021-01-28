class Employee{
    constructor (name, email, id) {
        this.name = name;
        this.email = email;
        this.title = "Employee"
        this.id = id;
    }
}

class Manager extends Employee {
    constructor (name, email, id){
        super(name, email, id);
        this.officeNum = officeNum;
        this.title = "Manager";
    }
}

class Engineer extends Employee {
    constructor(name, email, id, git) {
        super(name, email, id);
        this.github = github;
        this.title = "Engineer";
    }
}

class Intern extends Employee {
    constructor (name, email, id, school) {
        super(name, email, id);
        this.school = school;
        this.title = "Intern";
    }
}

module.exports = Employee, Manager;