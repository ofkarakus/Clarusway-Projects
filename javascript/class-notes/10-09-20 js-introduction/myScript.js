var myName = 'Omer';
var myName = 'Ahmet';
var MyName = 'Ali'

document.write(myName);

console.log('hello');
console.log(myName);
console.log(MyName);


var a = 10;
let x = 9;
const y = 'const'

{
    let b = 3;
    var c = 5;
    const d = 6;
    {
        console.log('d = ' + d);
    }
}

console.log('a = ' + a);
console.log('c = ' + c);
// console.log('b = ' + b);  // not accessible
// console.log('d = ' + d);  // not accessible
console.log('x = ' + x);
console.log('y = ' + y);