const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, email, id, officeNum){
        super(name, email, id);
        this.officeNum = officeNum;
        this.title = "Manager";
    }
}

module.exports = Manager;