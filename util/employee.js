class Employee{
    constructor (name, email, id) {
        this.name = name;
        this.email = email;
        this.title = "Employee"
        this.id = id;
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

module.exports = Employee;