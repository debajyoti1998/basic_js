class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan(){
        return `I am ${this.name} and this company is the best.`
    }

    joiningYear(){
        return `I am joining this comany in ${2022 - this.experience}`;
    }
}

// const employee1 = new Employee("Tutun",10,"A");
// console.log(employee1.slogan());
// console.log(employee1.joiningYear());

class Programmer extends Employee{
   constructor (name, experience, division,language,github){
       super(name, experience, division);
       this.language = language;
       this.github = github;
        
   }
   static mult(a,b) {
       return a*b;
   }
}
const programmer1 = new Programmer("Tutun",0,"A","JavaScript","tutun123");
console.log(programmer1);
console.log(programmer1.slogan());
console.log(programmer1.joiningYear());
console.log(Programmer.mult(2,3));