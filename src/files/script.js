// const numerSearch = (number) => {
//     if (number < 0){
//         console.log("Число " + number + "отрицательное");
//     } else {
//         console.log("Число " + number + " положительное")
//     }if(number === 0){
//         console.log('нулю все похую')
//     }
// };

// numerSearch(-2);
// const stringLength = (string) => {
// console.log(string.replace(/ /g,'').length);
// }

// stringLength(' f f ');

// const lastSymbol = (string) => {
//     // const last = string.length - 1;
//     // console.log(string[last])
//     // console.log(string.slice(-1));
//     console.log(string.split([''[,]]));
// };

// lastSymbol('hello')

// const numberOdd = (number) => {
//     // if(number % 2 === 0){
//     //     alert(number +' чётное число');
//     // }else{ alert(number +' нечётное число');}
//     number % 2 === 0 ? alert(true) : alert(false)
// };
// numberOdd(7);


// const searchSumbol = (num1, num2) => {
//     const sumbol1 = num1.length[1]
//     const sumbol2 = num2.length[1]
//     console.log(num1[sumbol1])
//     console.log(num2[sumbol2])
//     if (num1[sumbol1] === num2[sumbol2]) {
//         alert(true)
//     } else {
//         alert(false)
//     }

// }

// searchSumbol('привет','жопа')

// const searchSumbol = (num1, num2) => {
//     const sumbol1 = num1.slice(0,1)
//     const sumbol2 = num2.slice(0,1)
//     console.log(sumbol1,sumbol2)
//     if (sumbol1 === sumbol2) {
//         alert(true)
//     } else {
//         alert(false)
//     }

// }

// searchSumbol('привет','ere');

// const lastSymbol = (string) => {
//     // const last = string.length - 1;
//     // console.log(string[last])
//     // console.log(string.slice(-1));
//     console.log(string.split([''[,]]));
// };

// lastSymbol('hello')

// const lastSumbol = (str) =>{
//    let last = str.length -1;
//    if (str[last] === 'ь'){ 
//     last = str.length -2;
//    }
//    alert(str[last]);
// };

// lastSumbol('ромовь');

//  //Дано число. Выведите в консоль последнюю цифру этого числа.
// const lastNumber = (num) =>{
//    num = String(num);
// let last = num.length - 1;
// alert(num[last]);

// };
// lastNumber(876);

// //Дано число. Выведите в консоль первую цифру этого числа.
// const lastNumber = (num) =>{
//    num = String(num);
// let first = [0] ;
// alert(num[first]);

// };
// lastNumber(876);

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const sumNumber = (num) => {
//    num = String(num);
//    let first = num[0];
//    let last = num[num.length - 1];
//    let sum = (Number(first) + Number(last));
//    alert(sum);
// };
// sumNumber(26229);

//Дано число. Выведите количество цифр в этом числе.

// const numberTotal = (num) =>{
//    num = String(num);
//    let total = num.length;
//    alert (total);

// }

// numberTotal(55);

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const numberTrue = (num1, num2) => {
//    num1 = String(num1);
//    num2 = String(num2);
//    let one = num1[0];
//    let two = num2[0];
//    if (one === two) { alert(true)}
//    else{alert(false)}
// };

// numberTrue(323, 323);

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// const strLong = (str) =>{
//    if (str.length >= 2) {
//       alert(str[str.length -2]);
//    } else{alert(false)}
// };
// strLong('1');

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// const tf = (num1, num2) => {
// if (num1 % num2 === 0){alert(true)}
// else {alert(false)}

// };
// tf(10,3);

//Выведите в консоль все целые числа от 1 до 100.
// const  oddChek = ()=>{
//    for (let i = 2; i <= 100; i += 2){
//       console.log(i);
//    };
// };
//  oddChek();

//Выведите в консоль все целые числа от -100 до 0.
//Выведите в консоль все целые числа от 100 до 1.
//Выведите в консоль все четные числа из промежутка от 1 до 100.
//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
// const  oddChek = (appogei, turn, start, )=>{
//    for (let i = start; i <= appogei; i += turn){
//       console.log(i);
//    };
// };
//  oddChek(100, 3, 3);
 
//Найдите сумму всех целых чисел от 1 до 100.
//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.


// const sumFor= (appogei, turn, start, ) =>{
//    let sum = 0;
//    for (let i = start; i <= appogei; i += turn){
//       sum += i;
//       console.log(sum)
//    }
//    alert(sum);
// };
// sumFor(100, 2, 1);

//Даны два целых числа. Найдите остаток от деления первого числа на второе.

// const numDivision = (num1,num2)=>{
//     return console.log(num1 % num2);
// }
// numDivision(9,4)

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

// const enumerationStr = (str) =>{
//     for (i = str.length  - 1; i >=0; i-- ){
//         console.log(str[i])
//     }
// } 
// enumerationStr('перец')

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const sqaureSum = (array) =>{
    let sum = 0;
    for (i = 0; i <= array.length - 1; i++){
        sum += array[i]*array[i];
    }
    console.log(sum)
}
let numbers = [2,2,1,1,]
sqaureSum(numbers);