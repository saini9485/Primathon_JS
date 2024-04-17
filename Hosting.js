//hosting example predict the output following question
1.
//  var a = 10;
// {
//     var a = -10;

// }
// var b = a;
// {
//     var b = -20;
// }
// console.log(b) // -20

2.
// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log("i am outside of the loop", i)
// for(let j=0; j<3; i++){
//     console.log(j)
// }
// console.log("i outside of the loop", j) // infinite 0

3.
// console.log(y)
// y = 1
// ReferenceError: y is not defined


4.
//  console.log(y)
//  var y = 2;
// undefined

5.
// y = 3;
// console.log(y)
// var y;
// 3

6.
// var a = 1;
// console.log(a) // 1
// var a = 2;
// console.log(a) // 2

7.
// var z = 1;
// let z;
// console.log(z) //SyntaxError: Identifier 'z' has already been declared     

8.
// console.log(z)
// let z = 1; // ReferenceError: Cannot access 'z' before initialization

9.
// function hoistExample() {
//     var a; 
//     console.log("Before: ", a); // undefined
//     a = 10; 
//     console.log("After: ", a); // 10
// }
// hoistExample();

10.
// function hoistingExample() {
// console.log("Value of a in local scope: ", a); // 1
// } 
// console.log("Value of a in global scope: ", a); // undefined
// var a = 1;
// hoistingExample();

11.
// function hoistingExample() {
//     a = 1;
// }
// hoistingExample();
// console.log(a); // 1

12.
// function hoistingExample() {
//     var a = 1;
// }
// hoistingExample();
// console.log(a) // 1

13.
// function a() {
//     console.log("1")
// }
// a();
// function a() {
//     console.log("2") // 2, 2
// }
// a()

14.
// var test = 1; function functionHoisting() {
//     test = 10; return;
//     function test() { }
// }
// functionHoisting();
// console.log(test); // 1

15.
// console.log(a());  // 3
// function a() {
//     var b = function () {
//         return 3;
//     }; return b();
//     var b = function () {
//         return 8;
//     };
// }

16.
// console.log(a()); // 8
// function a() {
//     function b() {
//         return 3;
//     }
//     return b();
//     function b() {
//         return 8;
//     }
// }