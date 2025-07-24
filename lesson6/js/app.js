console.log("hello lesson6");

// let color = prompt('цвет')

// let age1 = prompt('сколько вам лет')
// if (age1>=1000) {
//   console.log('бессмертный');
// } else if (age1>=18) {
//   console.log('совершеннолетний');
// } else if (age1>=0) {
//   console.log('не совершеннолетний');
// } else {
//   console.log('не правильно ввели возраст');
// }

// switch (color) {
//   case 'red' : console.log('red'); break
//   case 'green' : console.log('green'); break
//   case 'yellow' : console.log('yellow'); break
//   default: console.log('не правильный цвет')
// }

// let array = [1, 2,1,2,5,5,5,5,2,'Bakyt', true, null, undefined]

// console.log(array);

// let a
// console.log(a);
// let b=null
// console.log(b);

// console.log(array[1]);
// console.log(array[2]);
// console.log(array.length-1);
// console.log(array[array.length-1]);
// array[3]='Kuban'
// console.log(array);
// console.log(typeof array);
// let arr = [1,2,3,4,5,6,7]
// console.log(arr);

// arr.pop() // удаляет с конца
// arr.shift() // удаляет с начала
// arr.push(654) // добавляет с конца
// arr.unshift(654) // добавляет с начала

// console.log(arr);

// console.log(array.indexOf(color));

// console.log(array[array.indexOf(color)]);

let array2 = [1, 2, 3, 4, 5, 6, 74, 8, 9, 21, 32, 132, 13, 21, 321];

console.log(array2);
console.log(array2.slice(0, 5));
console.log(array2.slice(3, 6));
console.log(array2.slice(7, 10));
console.log(array2.slice(-1));
console.log(array2.slice(-5));
console.log(array2.join(","));
console.log(array2.slice(0, 3).join(","));
console.log(array2.slice(0, 3).join(","));
let arr2 = "1,2,3,4,5";
console.log(arr2.split(","));
console.log(array2.sort());
console.log(array2.sort((a, b) => a - b));
let arr3 = "1,2,3,4,8,6,8,7,5";
console.log(arr3.split(","));
let arr4 = "1;2;3;4;5;6;4;4";
console.log(arr4);

console.log(
  arr4
    .split(";")
    .sort((a, b) => a - b)
    .join(";")
);

let array11 = [1, 2, 3];
let array22 = [4, 5, 6];
let array33 = [array11, array22];
console.log(array33);
console.log([...array11, array22]);
let arrayRest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let [a, , c, , e, f, g, ...rest] = arrayRest;
console.log(a, c, e, f, g, "555");
console.log(rest);
console.log(...array11, ...rest);
// let array2= [1,2,3,4,5,6,74,8,9,21,32,132,13,21,321]
console.log(array2);

// for (let i = 0 ; i<array2.length; i++) {
//   console.log(array2[i]**2);
// }

// for (let i=array2.length-1; i>=0; i--) {
//   console.log(array2[i]**2);
// }

// let ii =array2.length-1
// while (ii>-0) {
// console.log(ii,'while');
// ii--
// }

for (let i = 0; i < arrayRest.length; i++) {
  if (arrayRest[i] % 2 === 0) {
    console.log(arrayRest[i]);
  } else {
    console.log(-arrayRest[i]);
  }
}

let str = "кыргызстан";
let str2 = "КЫРГызстан";

console.log(str[2]);
console.log(str[str.length - 1]);
console.log(str.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2[0].toUpperCase() + str2.slice(1).toLowerCase());

let fa = [1, 2, 3, 4, 5];
let sum = 0;
for (let element of fa) {
  sum += element;
  console.log(element);
}
console.log(sum);

let result = 1;
for (let element of fa) {
  // sum *= element;
  result = result * element;
  console.log(element);
}
console.log(result);
