**PROTOTYPE :-**

![Prototype](https://image.slidesharecdn.com/javascript-oop-121102160146-phpapp02/95/javascript-the-prototype-property-17-638.jpg?cb=1351872544)



When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) which has a constructor property by default. The constructor property points back to the function on which prototype object is a property. `We can access the function’s prototype property using functionName.prototype.`

**_Constructor_ _Function__Function_ :-**
```js
function Student(firstName, lastName) {
	this.firstName = firstName,
	this.lastName = lastName,
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	}
}


// Let’s create objects Student1 and Student2 using the Student constructor function:

var Student1 = new Student("Virat", "Kohli");
var Student2 = new Student("Sita","singh");

console.log(person1)

```

![Prototype](https://miro.medium.com/max/838/1*3ftgUPoTz5nSmGPwTjf7VA.png)

When an object is created in JavaScript, JavaScript engine adds a __proto__ property to the newly created object which is called dunder proto. dunder proto or __proto__ points to the prototype object of the _constructor_ function.



prototype is a property of function object.

Only function objects can have prototype property.