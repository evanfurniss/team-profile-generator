const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, email, id, officeNum){
        super(name, email, id);
        this.officeNum = officeNum;
        this.title = "Manager";
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
    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager;