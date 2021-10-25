let value;

const  numbers = [43,56,33,23,44,35,5];
//const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["python", "java", "c++", "javascript"];

const a = ["merhaba", 22, null, undefined, 3.14 ];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];

numbers[2] = 1000;

value = numbers;

value =numbers.indexOf(1000);

numbers.push(2000);
numbers.unshift(3000);
value = numbers;

numbers.pop();
value = numbers;

numbers.shift();
value = numbers;

numbers.splice(0,3);
value = numbers;

numbers.reverse();
value = numbers;

value = numbers.sort();

value = numbers.sort(function(x,y){return x-y;})

value = numbers.sort(function(x,y){
    return y-x;
})

console.log(value);