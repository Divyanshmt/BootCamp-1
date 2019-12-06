var sprintf=require("sprintf-js").sprintf;



function Student(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}


// Let’s create objects Student1 and Student2 using the Student constructor function:
// Student.prototype.age = 10;
var student1 = new Student("Virat", "Kohli");
var student2 = new Student("Sita","singh");



console.log(student1);
// console.log(student2);
console.log(student1.__proto__.age);
console.log(student1.__proto__ === Student.prototype);

console.log(Student.prototype);
