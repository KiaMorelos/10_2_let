//example:
// var PI = 3.14;
//PI = 42; // stop me from doing this!

//REWRITTEN

const PI = 3.14;
//PI = 42 this reassignment is not allowed

//_______Quiz_______

//The difference between var and let is that let has block scope only, whereas var has function scope. Var can be redeclared, let cannnot. Let can only be reassigned.

//The difference between var and const is again scope. var has function scope, const has block scope. Const cannot be reassigned or redeclared. With var you can do both.

//The difference between let and const is that const does not allow reassignment, and let does.

//Hoisting happens when using var. the variable declarations are loaded, at the 'top' of the code. Making it possible to access variables before it's been assigned but they would always be undefined. It's seen, but not defined.