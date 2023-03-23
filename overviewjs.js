let x =5;
let y=7;
let array=[1,2,3];
array.push(3);
console.log(array);

//Tài khoản: xommjvaq@triots.com/ mật khẩu: 8oPe2hP@vXin tài khoản ChatGPT miễn phí: linhlungctv@maills.cyou - pass: Anonymous@1234

// the map method 

let arr= [{name : 'joe'} , {name : 'john'}];

 // This is where the map() method comes in. It takes a callback function. Map creates a new array and never mutates the old one, and the callback expresses what you want to do with the data from the original array. It will look like this:

let namesArr = arr.map(element => element.name); // output ['joe' , 'john']

//foreach

let arr= [1, 2, 3];

 // let's output each element on the console
 
arr.forEach(elem => console.log(elem));

// filter
let arr = [1, 2, 3, 4, 5];

 // Let's create an array of numbers bigger than 3
 
let filteredArray = arr.filter(elem => elem > 3); // output [4, 5]
//SOME
let arr = [1, 2, 3, 4, 5];

 // Let's check if at least one element is bigger than 4
 
let bool = arr.some(elem => elem > 4); // output true

// sort
let arr = [1, 2, 4, 3];

 // sorting in ascending order
 
arr.sort();

console.log(arr); // [1, 2, 3, 4]

 // using custom sort to sort in descending order
 
arr.sort((elem1 , elem2) => elem2 - elem1);

console.log(arr); // output [4, 3, 2, 1]
//object

let obj = {age : 18};

Object.freeze(obj);

 // Let's try to mutate this object
 
obj.age = 17; // Throws an error in strict mode

let isFrozen = Object.isFreezed(obj); // output true
// value
let obj = {name : 'John Doe' ,age : 45};

let keys = Object.keys(obj); // output ['name', 'age']

let values = Object.values(obj); // output ['John Doe', 45]

//FUNCTIONS
let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

//DOM
// How to change the content of HTML elements
// How to change the style (CSS) of HTML elements
// How to react to HTML DOM events
// How to add and delete HTML elements

// Examples of HTML events:

// When a user clicks the mouse
// When a web page has loaded
// When an image has been loaded
// When the mouse moves over an element
// When an input field is changed
// When an HTML form is submitted
// When a user strokes a key

//event listener
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

//type and coercion
//Types and coercion: Types in JavaScript refer to the data types that can be assigned to variables, such as strings, numbers, booleans, arrays, objects, and more. 
//Coercion refers to the automatic conversion of a value from one data type to another data type.

// Type coercion is the process of converting value from one type to another (such as string to number, object to boolean, and so on). Any type, be it primitive or an object, is a valid subject for type coercion. To recall, primitives are: number, string, boolean, null, undefined + Symbol (added in ES6).

// Example of types:

// String type: let name = "John";
// Number type: let age = 25;
// Boolean type: let isStudent = true;
// Array type: let numbers = [1, 2, 3];
// Object type: let person = { name: "John", age: 25 };
// Example of coercion:

// String to number: let num = +"10"; // num will be 10
// Number to string: let str = 10 + ""; // str will be "10"
// Boolean to number: let num = true + 1; // num will be 2
// String to boolean: let bool = !!""; // bool will be false
// Scope: https://www.w3schools.com/js/js_scope.asp



///Closure: Closure in JavaScript refers to the ability of a function to remember and access its lexical scope even when it is executed outside of that scope. In other words, a closure is created when a function is defined inside another function and has access to the outer function's variables and parameters, even after the outer function has returned.

function outerFunction() {
    let count = 0;
    
    function innerFunction() {
      count++;
      console.log(count);
    }
    
    return innerFunction;
  }
  
  let closure = outerFunction();
  
  closure(); // Output: 1
  closure(); // Output: 2
  closure(); // Output: 3
//Higher-Order Functions: Higher-order functions in JavaScript are functions that take other functions as arguments, or return functions as values. These functions allow for the creation of more flexible and reusable code, by enabling the use of function composition and abstraction.  
function add(a) {
  return function(b) {
    return a + b;
  }
}

let add5 = add(5);

console.log(add5(3)); // Output: 8
console.log(add5(7)); // Output: 12

// OOP in js and prototype
// Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ một object khác. same inheritance


// Es6 
// https://www.boardinfinity.com/blog/top-10-features-of-es6/#2-arrow-functions : es6
//Parallel 
//Parallel (song song) trong JavaScript đề cập đến việc thực hiện nhiều tác vụ cùng một lúc, 
async.parallel([
  function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
  }
],
function(err, results) {
  console.log(results);
  // the results array will equal [1, 2] even though
  // the second function had a shorter timeout.
});

// an example using an object instead of an array
async.parallel({
  task1: function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, 1);
    }, 200);
  },
  task2: function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, 2);
    }, 100);
    }
}, function(err, results) {
  console.log(results);
  // results now equals to: { task1: 1, task2: 2 }
});

//callback
function fetchData(callback) {
  setTimeout(() => {
    const data = 'This is some data fetched asynchronously';
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});
//Promise 
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'This is some data fetched asynchronously';
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);

    });
  
//  n this example, the fetchData function returns a Promise that resolves with the fetched data after 2 seconds.
// The then method is used to handle the resolved value, and the catch method is used to handle any errors that might occur.


//async/await
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data has been fetched!");
      }, 2000);
    });
  }
  
  async function getData() {
    const data = await fetchData();
    console.log(data); // output: "Data has been fetched!"
  }
  
  getData();


  //generator
  function* generator() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

const gen = generator();

console.log(gen.next().value); // output: "Hello"
console.log(gen.next().value); // output: "World"
console.log(gen.next().value); // output: "!"
console.log(gen.next().value); // output: "undefined"
//Trong ví dụ này, hàm generator() được định nghĩa là một generator bằng cách sử dụng từ khóa function*. Hàm này chứa ba câu lệnh yield, mỗi lần gọi đến hàm next() của generator sẽ trả về giá trị được yield và tạm dừng thực thi hàm.
//Sau khi khởi tạo generator bằng cách gọi hàm generator(), chúng ta có thể gọi next() để lấy ra từng giá trị một được trả về bởi các câu lệnh yield. 
//Khi hàm generator() đã chạy đến hết, các lần gọi next() sau đó sẽ trả về undefined.

// audit and revision
//Trong JavaScript, audit và revision là hai khái niệm liên quan đến quá trình kiểm tra và cập nhật mã nguồn.

//Audit (đánh giá) trong JavaScript thường được sử dụng để kiểm tra mã nguồn của một ứng dụng web và đảm bảo rằng nó tuân thủ các chuẩn bảo mật và chất lượng mã nguồn. 
//Điều này có thể bao gồm kiểm tra các lỗ hổng bảo mật, các vấn đề hiệu suất và các sai sót cú pháp. 
//Có nhiều công cụ audit mã nguồn JavaScript như ESLint, JSHint, Prettier, SonarQube, v.v. Lighthouse và WebPageTest
//revision
//"Revision" trong JavaScript có thể đề cập đến việc cập nhật mã nguồn của một dự án hoặc phiên bản mới của một thư viện.