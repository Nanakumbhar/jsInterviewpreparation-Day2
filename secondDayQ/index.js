// Q.1 What is creation phase and execution phase?

// Ans=>Each execution context has two phases: the creation phase and the execution phase.
// The creation phase
// When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

// Create the global object i.e., window in the web browser or global in Node.js.
// Create the this object and bind it to the global object.
// Setup a memory heap for storing variables and function references.
// Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.
// After the creation phase, the global execution context moves to the execution phase.

// The execution phase
// During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.



// Q.2 What are objects in javascript?

// Ans=> objects in JavaScript may be defined as an unordered collection of related data,
//  of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or 
// functions and are called properties and methods, respectively, in the context of an object.

// eg . 
let object_name = {
    key_name :"value",
    age: 24
    
}
console.log(object_name.age)

// Q.3 What are function constructors?

// Ans=> The constructor function is a regular JavaScript function that contains a recipe to create 
// a new object.
//  When we invoke it using the new operator it creates a new instance of the object and returns it.
// the function utilizes this  key word inside it.
// it good practice to follow to keep the first letter of function name capital.

// eg .
       function Test(){
                     this . age = 23,
                     this.name ="nana"
       }
let x= new Test()
console.log(x)

// Q.4 Explain prototypes and  prototype chain.

// prototype is itself an object that have prototype object present inside it .
//  means the hidden method and hidden attribute of an objects and everything.
// is one like big object of every data type to find some methods.
// for every data type has unique prototype.

// eg . 
function Student() {
    this.name = 'John';
    this.gender = 'Male';
}

var studObj1 = new Student();
studObj1.age = 15;
(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // undefined.


// Q.6 Give an example of inheritance using function constructor

// Ans=> inheritance is something when child is inheriting the properties of parrent.

// eg .
 function Test1(){
    this.firstName ="nana"
 }

 function Test2(){
    this.lastName="kumbhar"
    Test1.call(this)
 }

 let student = new Test2()
 console.log(student)  //Test2 {lastName: 'kumbhar', firstName: 'nana'}

// Q.7 What are callbacks?

// Ans=> function that pass an argument to another function is called as callback function .
    //   eg . setTimeout , setInterval , eventlistener .
    // as js is the event drived language , which means they dont stop the program from running until they are completed .

    // eg . 
    function callback(callback){
                console.log ("hi iam callback function")
                callback()
    }

    function show(){
        console.log('this will printed after callback')
    }
   callback(show)