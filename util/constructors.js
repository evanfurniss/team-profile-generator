class Employee{
    constructor (name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}

class Manager extends Employee {
    constructor (name, email, id){
        super(name, email, id);
        this.officeNum = officeNum;
    }
}

module.exports = Employee, Manager;