// complete this js code
function Person(name, age) {
	 this.name = name;
	  this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
  
  this.jobTitle = jobTitle;
}
// Inherit the prototype methods from Person
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Add a new method to the Employee class
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
