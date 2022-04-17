const proto = {
    slogan: function () {
        return `This coomapny is the best`
    },
    changeName: function (name) {
        this.name = name
    }
}

const tutun = Object.create(proto)
tutun.name = "Tutun"
tutun.role = "Programmer";
tutun.changeName("Babun")
tutun.slogan()
// console.log(tutun);


function Employee(name, salary, exp) {
    this.name = name;
    this.salary = salary;
    this.exp = exp;
}

Employee.prototype.slogan = function () {
    return `This coomapny is the best.Regards ${this.name}`
}
const a = new Employee("tutun", 5000, "1 year")
// console.log(a.slogan());
// console.log(a);

//Programmer

function Programmer(name,salary,exp,language){
    Employee.call(this,name,salary,exp);
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype)

let rohan = new Programmer("Rohan",2000,0,"Javascript")
console.log(rohan.slogan());
console.log(rohan);