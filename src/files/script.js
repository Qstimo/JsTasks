
let generateArray = num => {
	let arr = [];
	for (let index = 0; index <= num; index++) {
		arr.push(index);

	}
	return arr;
};






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
//         console.log(str[+i])
//     }
// }
// enumerationStr('12345')

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const sqaureSum = (array) =>{
//     let sum = 0;
//     for (i = 0; i <= array.length - 1; i++){
//         sum += array[i]*array[i];
//     }
//     console.log(sum)
// }
// let numbers = [2,2,1,1,]
// sqaureSum(numbers);

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// const sqaureSum = (array) =>{
//     let sum = 0;
//     for (i = 0; i <= array.length - 1; i++){
//         sum += Math.sqrt(array[i]);
//     }
//     console.log(sum)
// }
// let numbers = [4,4,4,4,]
// sqaureSum(numbers);

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// const sqaureSum = (array) =>{
//     let sum = 0;
//     for (i = 0; i <= array.length - 1; i++){
//         if (array[i] > 0 && array[i] <= 10 ){
//         sum += array[i];
//         }
//     }
//     console.log(sum)
// }
// let numbers = [-1,4,4,4,]
// sqaureSum(numbers);

//Заполните массив целыми числами от 1 до 10.

// const fillingArray =(array) =>{
//     for(let i = 1; i <= 10; i++){
//         array.push(i);
//     }
//     console.log(array)
// }
// let numbers = [];
// fillingArray(numbers)

//Заполните массив четными числами из промежутка от 1 до 100.
// const fillingArray =(array) =>{
//     for(let i = 2; i <= 100; i+=2){
//         array.push(i);
//     }
//     console.log(array)
// }
// let numbers = [];
// fillingArray(numbers)

// Дан массив с дробями:

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
//  let fraction = [1.456, 2.125, 3.32, 4.1, 5.34];
//  const roundingNum = (arr) =>{
//     let arrTrue = [];
//     arr.forEach(element => {
//        element = element.toFixed(1);
//        arrTrue.push(+element);
//     });
//     console.log(arrTrue)
//  }
//  roundingNum(fraction);
//  console.log(fraction)

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// const arrSearchStr = (arr) =>{

//     for(let i = 0; i<=arr.length - 1;i++){
//         if (arr[i].includes('http://')){
//             console.log(arr[i])
//         }else{arr.splice(i,1)};

//     }
//     // const arrNew = arr.find((title) => title.includes('http://'))
//     console.log(arr);
//     return arr;
// }
// let arr = ['http://fdfdfdfd','http://fdfdfdfd', 'http://ttrewrerwr', 'lorem'];
// arrSearchStr(arr);

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// const arrSearchStr = (arr) =>{
//     const newArr = [];
//     for(let i = 0; i <= arr.length - 1;i++){

//         if (arr[i].includes('.html')){
//             newArr.push(arr[i])
//             console.log(arr[i])
//         }

//     }
//     // const arrNew = arr.find((title) => title.includes('http://'))
//     console.log(newArr);
//     return newArr;
// }
// let arr = ['http://fdfdfdfd.html','http://fdfdfdfd', 'http://fdfdfdfd', 'http://ttrewrerwr', 'lorem.html',];
// arrSearchStr(arr);


//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

// const arrNum = (arr) => {
//     const result = arr.map(item => {
//         return  (item*1.1).toFixed(1);

//     })

//     console.log(result);
// }

// let arrtrue = [1,2,3,4,5];
// arrNum(arrtrue);

//Заполните массив случайными числами из промежутка от 1 до 100.
// const randomNum=(num1, num2) =>{
//     let rand = num1 + Math.random() * (num2 +1 - num1);
//     return Math.floor(rand)
// }
// console.log(randomNum(1,45));

// const generateArray = (length, max) => (
//     [...new Array(length)]
//         .map(() => Math.round(Math.random() * max))
// );
// let number = generateArray(10, 100);
// console.log(number);

//Дано некоторое число:
//12345
//Выведите в консоль все его символы с конца.

// const numbersCock = (num) => {
//     const arr = []
//     for (let i = 0; i < num.length; i++) {
//         arr.push(num[i])
//     }
// console.log(arr)
// }
// numbersCock(123456);

// const numbersCock = (num) => {
// let newStr = num.toString()

// for (i = newStr.length  - 1; i >=0; i-- ){
//     console.log(newStr[i])
//     }
// }

// numbersCock(123456)

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:

// [1, 2]
// [3, 4]
// [5, 6]

// let numbers = [1, 2, 3, 4, 5, 6];
// const chekSlice = (arr) => {
//     for (i = 0; i <= arr.length -1; i+=2) {
//         console.log(arr.slice(i,i+2));
//     }
// }
// chekSlice(numbers);

//   Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:

// [1, 2, 3, 4, 5, 6]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

//Дана некоторая строка. Найдите позицию первого нуля в строке.

// let str = '0 1 2 34 0 49 82 28 0 9';
// const serchNumber = (str, num)=>{
//     for (i = 0; i < str.length; i++){
//         if (str[i] === '0') {
//             console.log(str[i].length);
//             break;
//         }
//     }
// }
// serchNumber(str);
// console.log(str.indexOf('0'));

//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

// const numbersSum = ()=>{
//     let result = 0;
//     for (i = 10; i <= 1000; i++){
//         let string = String(i);
//         if ((+string[0]+ +string[1]) == 5){
//             console.log(i)
//         }
//         // console.log(+string[0] + +string[1]);

//     }
// }
// numbersSum();

//Дан массив. Удалите из него элементы с заданным значением.
// let arrtrue = [1, 2, 3, 3, 3, 4, 4, 5];
// const arrDelete = (arr, elem)=>{
// for (i=0;i<= arr.length -1;i++){
//     if (arr[i] == elem){
//         arr.splice(i,1);
//     }

// }console.log(arr)
// }


// arrDelete(arrtrue, 4);

// let arrtrue = [1, 2, 3, 3, 3, 4, 4, 5];
// let elem = 3;

// arrtrue = arrtrue.filter((item) => item !== elem);

// console.log(arrtrue);
// // [1, 2, 3, 3, 3, 5]

//Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
// let arrNum = [1, 5, 3, 4, 5, 6];
// const arrSum = (arr) =>{
//     let sum = 0;
//     let mediana = arr.length/2;
//     for (let i = 0; i < mediana; i++){
//         sum += arr[i];

//     }
//     console.log(sum);
// }
// arrSum(arrNum);

//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// let arrNum = [-1, 5, -3, -4, 5, -6];
// const arrSum = (arr) =>{
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 0){
//             sum += 1;
//         }

//     }
//     console.log(sum);
// }
// arrSum(arrNum);

//Дан массив с числами. Оставьте в нем только положительные числа.


// let arrtrue = [1, -2, -3, 3, -3, -4, -4, 5];


// arrtrue = arrtrue.filter((item) => item > 0);

// console.log(arrtrue);

//Дана строка. Удалите предпоследний символ из этой строки.
// let str = 'Дана строка. Удалите предпоследний символ из этой строки.'
// console.log(str.slice(0,-1));

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// let arrNum = [2, 2, 2, 1, 1, 1];
// const arrDivision = (arr) => {
//     let median = arr.length/2;
//     let sum1 = 0;
//     let sum2 = 0;
//     for (i = 0; i < arr.length; i++){
//         if (i < median){
//             sum1 += arr[i];
//         } else {
//             sum2 += arr[i];
//         }

//     }
//     let sum = sum1/sum2;
//     console.log(sum.toFixed(1));
// }

// arrDivision(arrNum);

// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// const srtFunc = (str1, str2) =>{
//      str1 = str1[str1.length-1];
//      console.log(str1);
//     str2 =str2[0] ;
//     if (str1 ==str2){
//     console.log(true)
//     } else {console.log(false)}
// }

// Дана некоторая строка. Найдите позицию третьего нуля в строке.

// const nuleFiend = (str)=>{
//     let check = 0;
//     for(let i = 0; i < str.length; i++){
//         if (str[i] == 0){
//             check++;
//             if(check >= 3){
//                 console.log(i);
//                 break;
//             }
//         }
//     }
// }
// let string = '11230020002';
// nuleFiend(string);

// Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.

// let num = '12,34,56';
// const numArr = num.split(',').join(' ').split(' ');
// console.log(numArr);
// let sum = 0;
// for(i=0; i < numArr.length;i++){
//     sum += +numArr[i];
// }
// console.log(sum);

// const sumArr=(str)=>{
//     const result=str.split(',').map(Number).reduce((acc, item)=> acc+item, 0 )
//     console.log( result)
// }
// sumArr('12,34,56')


// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

// const dataConst = (str) => {
// let [year, month, day] = str.split('-');
// const data={year, month, day}
// console.log(data);
// }
// dataConst('2025-12-31')


//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// let findNum =(str)=>{
//     arr = str.split('');
//     console.log(arr);
//     const num = arr.map((item, i) => {

//         if(+item == Number(item)){
//             console.log(i);


//         }
//     })

// }
// findNum('1fanskfl111;m;dm');


//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// let obj = {
//     name: 'pidrila',
//     yo: 66,
//     male: 'curva',
//     lastName: 'pidrovich'
// }
// const findObj = obj =>{
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }
// findObj(obj);

//Дано число. Выведите в консоль количество четных цифр в этом числе.

// const numberOdd = num =>{
//     let check = 0;
//     let numArr = String(num).split('');
//     let Odd = numArr.forEach(elem=>{
//         if (elem % 2 === 0){
//             check++;
//         }
//     })
//     console.log(check);
// }
// numberOdd(124449933);

//'abcde'
//Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

//'AbCdE'

// const uppercaseStr = str =>{
//      str = str.split('');
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] % 2 != 0){
//           str[i] = str[i].toUpperCase();
//           console.log(str[i].toUpperCase());
//             }

//     }

// }
// uppercaseStr('abcde');


// function toWeirdCase(s){
//     var str = s.toLowerCase().split(''); // Переводим строку в нижний регистр, и разбиваем на массив.
//     var j = 0;
//     for(var i = 0; i < str.length; i++){ // проходимся циклом по этим массивам
//         if(str[i] == ' '){
//             j = 0;
//             continue;
//         }
//         else{
//             if (j % 2 == 0){
//                 str[i] = str[i].toUpperCase(); // переводим элемент с четным индексом в верхний регистр
//             }
//             j++;
//         }
//     }
//     return str.join('');
// }
// console.log(toWeirdCase('abcde'))

//Дана некоторая строка со словами:

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'

// const firstUpperStr = str =>{
//     return str.split(' ').map(element => {
//        return element[0].toUpperCase() + element.slice(1);

//     }).join(' ');


// }
// console.log(firstUpperStr('aaa bbb ccc'))

// //Дана некоторая строка, например, вот такая:

// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// const nullSearch = str =>{
//     // let counter = 0;
//     let arr = [];
//     str.split('');
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (element == 0){
//             arr.push(i)
//         }

//     }
//     return arr;
// }
// console.log(nullSearch('023m0df0dfg0'))

//'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

// 'abdeg'
// const deleteSumbl = str => {
//    return str.split('').filter((elem, i)=>{
//     for (let i = 0; i < str.length; i+=2) {

//     }
//    }
//    ).join('');

//     // for (let i = 0; i < str.length; i += 2) {
//     //    let deleted = str.splice(i, 1);
//     //     console.log(str)
//     // }
//     return str;
// }

// const str = 'abcdefg';
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
// if ((i + 1) % 3 !== 0) { // проверяем, не является ли текущий индекс третьим
// newStr += str[i];
// }
// }

// console.log(newStr);
//  const deleteSumbl = str => {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if ((i+1) % 3 !== 0){
//             result+=str[i];
//         }

//     }
//     return result;
//  }

// console.log(deleteSumbl(str))

// //Дан некоторый массив, например, вот такой:

// // [1, 2, 3, 4, 5, 6]
// // Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// const sumOdd = arr=>{
//     let result = 0;
//     let odd = 0;
//     let NoOdd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(i % 2 === 0){
//             odd += arr[i];
//         }else{
//             NoOdd += arr[i];
//         }

//     }
//     console.log(odd,NoOdd);
//     result = odd/NoOdd;
//     console.log(result);
// }
// let arr = [1, 2, 3, 4, 5, 6];
// sumOdd(arr);

//функция генерации уникальных чисел в указанном диапозоне

// function getRandomPositiveInteger (min, max) {
//     const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
//     const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
//     const result = Math.random() * (upper - lower + 1) + lower;

//     return Math.floor(result);
//   }

//   function createRandomIdFromRangeGenerator (min, max) {
//     const previousValues = [];

//     return function () {
//       let currentValue = getRandomPositiveInteger(min, max);
//       if (previousValues.length >= (max - min + 1)) {
//         console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
//         return null;
//       }
//       while (previousValues.includes(currentValue)) {
//         currentValue = getRandomPositiveInteger(min, max);
//       }
//       previousValues.push(currentValue);
//       return currentValue;
//     };
//   }

//   const generatePhotoId = createRandomIdFromRangeGenerator(1, 3);

//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
//  const arrNum = str =>{
//    let  arr = str.split('').filter(elem=>
//         Number.isInteger(+elem)

//     )
//     console.log(arr);
//  }

//  arrNum('adas11da4d5');

//Дан массив с некоторыми числами, например, вот такой:

// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:

// [321, 654, 987]

// const arr = [123, 456, 789];

// const reversedArr = arr.map(num => {
//   const reversedNum = parseInt(num.toString().split('').reverse().join(''));
//   return reversedNum;
// });

// console.log(reversedArr); // [321, 654, 987]

// Дана некоторая строка с числом:

// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// '1 234 567'


// spaceFunc('1234567')

// const str = '1234567';

// const formattedStr = str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// console.log(formattedStr); // '1 234 567'

// Дана некоторая строка:

// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// 'aBcDe'

// const reverseReg = str =>{
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (element.toUpperCase() === element){
//             newStr+= element.toLowerCase();
//         } else if(element.toLowerCase() === element){
//             newStr += element.toUpperCase();
//         }

//     }
//     console.log(newStr)
// }
// reverseReg('AbCdE')

// Дан некоторый массив с числами, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:

// [12, 34, 56]
// const joinArr = arr =>{

// }
// let arr = [12, 34, 56];

// const formattedStr = arr.join('').replace(/\B(?=(\d{2})+(?!\d))/g, ' ').split(' ');

// console.log(formattedStr);

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'
//каждая вторая заглавная буква
// const arrUpper = arr =>{
//     return arr.split(' ').map( word => {
//         return word.slice(0,1) + word[1].toUpperCase() + word.slice(2);
//     }).join(' ');
// }
// console.log(arrUpper('aaa bbb ccc eee fff'));
//  const arrUpperWord = str =>{
//     return str.split(' ').map((elem, i) =>{
//         if (i % 2 !== 0){ return elem[0].toUpperCase() + elem.slice(1)}
//         else{ return elem};

//     }).join(' ');
//  }
//  console.log(arrUpperWord('aaa bbb ccc eee fff'));

// Дана некоторая строка:

// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

// 'A BC DEF ghij'

// const upperFunc =str=>{
//    return str.split(' ').map((elem, i)=>{
//         if(elem.length <= 3){
//             return elem.toUpperCase();
//         } else{ return elem};
//     }).join(' ');
// }
// console.log(upperFunc('a bc def ghij'))

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// const registrFunc = str =>{
//     let newStr = str.split('');
//     for (let i = 0; i < newStr.length; i++) {
//         const element = newStr[i];
//         if (element == element.toUpperCase()){
//             console.log(element + ' имеет верхний регистр')
//         } else{
//             console.log(element + ' имеет нижний регистр')
//         }

//     }
// };
// registrFunc('aAa');

// Дано некоторое число, например, такое:

// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// 28

// const numOdd = num =>{
//     let str = num.toString();
//     return +str.split('').map(elem=>{
//         if (elem % 2 === 0){
//             return elem;
//         }
//     }).join('');
// }
// console.log(numOdd(123789));

//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

// const upperCurrent = str =>{
//     let currentValue = 0;
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (element == element.toUpperCase()){
//             currentValue++
//         };
//         if(currentValue >= 2){
//             console.log("в тексте больше 2х загалавных букв");
//             break
//         }
//     }

// }
// upperCurrent('fgsdnAjfAkk')

// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:

// '1 22 333 22 1'

// const smalStr = str =>{
//     return str.split(' ').map(elem =>{
//         if (elem.length <=3){
//             return elem;
//         }
//     }).join(' ');
// }
// console.log(smalStr('1 22 333 4444 22 5555 1'));

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:

// [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// let arrAll = [].concat(arr1[0],arr2,arr1.slice(1))
// console.log(arrAll)

//123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

// 12 + 34 + 56
// num = 123456;
// const formattedStr = num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ' ').split(' ');
// const sum = formattedStr.reduce((a,b)=>{
//     return +a + +b;
// }, 0)
// console.log(sum);

//
// Выведите в консоль элементы этого массива в обратном порядке.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// const strLength = str =>{
//     str.length > 3 ? console.log("больше") : console.log('меньше');
// };
// strLength('aa');

//Дано число. Получите первую четную цифру с конца этого числа.

// const oddNum = num=>{
//     return +num.toString().split('').find( elem=> elem%2 === 0)
// };
// console.log(oddNum(51111114));
// oddNum(568);

//Дана некоторая строка:

// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':

// '!bcde !bcde !bcde'

// const uyFunc = str=>{
//     return str.split(' ').map(elem=>{
//       return  (elem[0] = '!')+ elem.slice(1);
//     }).join(' ');
// }
//  console.log(uyFunc('abcde abcde abcde'));

//Дан массив с числами:

// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// const arrDuble = arr =>{
//     for (let i = 0 ; i < arr.length; i++) {
//         const element = arr[i];
//         if (element === arr[i-1]){
//             console.log(element,arr[i-1])
//         }

//     }
// }
// arrDuble([1, 2, 3, 3, 4, 5, 5]);

// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// const numRelev = num =>{
//     let str = num.toString().split('');
//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if(element < str[i-1]){
//             console.log(false);
//             break
//         }else{console.log(true)}

//     }
// }
// numRelev(1152345)

// Дан массив:

// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// const deletArr = arr=>{
//    return arr.filter(Boolean);
// }
// console.log(deletArr([1, '', 2, 3, '', 5]));

//Дан массив:

// let arr = [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// // Отсортируйте элементы в каждом подмассиве.
//   newArr = arr.map(i=> {
//     return i.sort((a,b)=>{return a-b})
//   })  ;
//   console.log(newArr);

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [3, 2, 3, 4, 5];
// // Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
// const arrConstructor = (arr1, arr2) => {
//     let maxArr = null;
//     let minArr = null;
//     if (arr1.length > arr2.length) {
//         maxArr = arr1;
//         minArr = arr2;
//     } else {
//         maxArr = arr2;
//         minArr = arr1;
//     };
//     maxArr = maxArr.splice(0,minArr.length);
//     console.log(maxArr,minArr)

// };
// arrConstructor(arr1,arr2)

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

// let currentValueOdd = num => {
//     for (let i = 10; i < num; i++) {
//         let strNum = i.toString();
//         // console.log(strNum.at(-2));
//         let arrNum = [];
//         if (strNum.at(-2) % 2 == 0) {
//             console.log(i);
//         }

//     }

// };
// currentValueOdd(1000)

//Дан массив. Удалите из него каждый пятый элемент.


// let deletFive = arr =>{
//     let newArr = [];
//     for (let i = 4; i < arr.length; i+=4) {
//         const element = arr[i];
//         arr.splice(i,1);

//     }
//     return arr;
// };
// let genArr = generateArray(30);
// console.log(deletFive(genArr));

//Дана некоторая переменная с числом:

// let num = 5;
// // Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:

// // '00000'
// let funcNull = num =>{
//     newstr= '';
//     for (let i = 1; i <= num; i++) {
//        newstr+= '0'

//     }
//     return newstr;
// };
// console.log(funcNull(3))

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

// 'aaa ccc fff'

// let str = 'aaa bbb ccc eee fff';
// newStr = str.split(' ');
// for (let i = 1; i < newStr.length; i+=1) {
//     newStr.splice(i,1)
// }
// console.log(newStr.join(' '))

// Дан массив:

// let arrNum = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

// let sumArr = arr =>{
//    return  arr.flat().reduce((a, b) => a + b, 0);

// }
// const add = arr => arr.reduce((a, b) => a + b, 0);

// console.log(sumArr(arrNum))

//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

// let arrStr = ['aeee', 'aaaa', 'aaa', 'aaa', '1234', 'aa',];
// const arrFunc = arr => {
//     let newArr = [];
//     arr.map((elem, i) => {
//         if (elem.length <= 3) {
//             newArr.push(elem);
//         }
//     })
//     return newArr;
// }

// console.log(arrFunc(arrStr))

// Дано некоторое число:

// let number =  13527;
// // Проверьте, что все цифры этого числа являются нечетными.
// let numNoOdd = num=>{
//     return num.toString().split('').map(elem=>{
//         if(+elem % 2 ===0){
//             console.log('найден четный элемент: ' + elem);

//         }else{
//             console.log('Элемент '+ elem + ' является нечётным')
//         }
//     }).join('');
// }
// numNoOdd(number)

// Дано некоторое слово:

// // 'abcba'
// // Проверьте, что это слово читается одинаково с любой стороны.
// const abba =str =>{
//     let newstr = str;
//     let strRev = newstr.split('').reverse().join('')

//     if(newstr == strRev){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// abba('abcba')

//Дан массив:

// let arrNum= [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// // Найдите сумму элементов этого массива.
// let sumArr = arr =>{
//        return  arr.flat(2).reduce((a, b) => a + b, 0);

//     }
//     const add = arr => arr.reduce((a, b) => a + b, 0);

//     console.log(sumArr(arrNum))

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
// let currentValueOdd = num => {
//         for (let i = 10; i < num; i++) {
//             let strNum = i.toString();

//             let arrNum = [];
//             if (strNum[0] % 2 == 0) {
//                 console.log(i);
//             }

//         }

//     };
//     currentValueOdd(1000)

// Дан некоторый массив, например, вот такой:

// let arrNum = [1, 2, 3, 4, 5, 6];
// // Поменяйте местами пары элементов этого массива:

// // [2, 1, 4, 3, 6, 5]
// let arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length - 1; i += 2) {
//     [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// }
// console.log(arr);

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// // Найдите сумму элементов этого объекта.
// let sum = 0;


// Object.values(obj).forEach((innerObj) => {

//     sum +=  Object.values(innerObj).reduce((a, b) => a + b, 0)
// });
// ;

// console.log(sum);

// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
// const findA = str=>{
//     let arr = [];
//     let newStr = str.split(' ').map(elem=>{
//         elem.split('');
//         for (let i = 0; i < elem.length; i++) {
//             const element = elem[i];
//             if(element === 'a'){
//                 arr.push(elem)
//             }

//         }
//     })
//     return arr;
// }
// console.log(findA('adsda yyyy iiii oooao '))

// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// let arr = generateArray(25);

// const arrFive = arr => {
// let newArr = [];
// for (let i = 1; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
//     if (element % 5 === 0){

//         newArr.push(element);
//     }

// }return newArr;
// }
// console.log(arrFive(arr))

//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
// const findZero = arr => {
//     let newArr = [];
//     arr.map(elem => {
//         let newElem = elem.toString().split('');
//         // console.log(newElem)
//         for(let i = 0; i < newElem.length; i++) {
//         const element = newElem[i];
//         if (element === '0') {
//             newArr.push(elem);
//         }

//     }
// })
// return newArr;
// }
// console.log(findZero(generateArray(30)));

//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// let number = generateArray(3);
// let find3 = arr =>{
//     return arr.find(elem => elem == 3);
// };
// console.log(find3(number));

//Дано некоторое число:

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

// const sortNum = arr => {
// return +arr.toString().split('').sort((a,b)=>{return a-b}).join('');
// }
// console.log(sortNum(35142))

//Напишите программу, которая сформирует следующую строку:

// '-1-2-3-4-5-'

// let stringProg = (n) => {
//     let newSrt = '-';
//     for (let i = 1; i < n; i++) {

//         newSrt+= i+'-';

//     }
//     return newSrt;
// };
//  console.log(stringProg(6))

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// // Найдите сумму элементов этого объекта.
// function sumObject(obj) {
//     let sum = 0;
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         sum += sumObject(obj[key]);
//       } else {
//         sum += obj[key];
//       }
//     }
//     return sum;
//   }

//   console.log(sumObject(obj));

// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
// let arrNum = generateArray(150);
// let arrTwoSumbl = arr => {
// 	return arr.filter(elem=> elem.toString().length <= 2);
// };
// console.log(arrTwoSumbl(arrNum))

// Дано число, например, вот такое:

// let num = 112345;
// // Проверьте, что все цифры этого числа больше нуля.
// const newNum = num.toString().split('').find(elem => elem == 0);
// console.log(newNum)
// Дан некоторый массив, например, вот такой:

// let arr = [123, 456, 789];
// // Слейте все элементы этого массива в один массив, разбив их посимвольно:

// // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArr = arr.join('').split('');
// console.log(newArr)

// Дан следующая структура:

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// // Найдите сумму элементов этой структуры.

// const sumObject = arr => {
// 	let sum = 0;
// 	arr.map(obj => {


// 		sum += Object.values(obj).reduce((a, b) => a + b, 0);


// 	}
// 	)
// 	return sum;
// }

// console.log(sumObject(data))

//3.7

//Дана строка со словами. Отсортируйте слова в алфавитном порядке.

// let str = 'bsfsd ctrbx abbx';
// const AzSort = str =>{
// 	return str.split(' ').sort().join(' ')

// }
// console.log(AzSort(str))

// Дано число. Получите массив делителей этого числа.

// const numDivision = num => {
// 	let arrDiv = [];
// 	for (let i = 1; i < num; i++) {
// 		if (num % i === 0){
// 			arrDiv.push(i);
// 		}

// 	}
// 	console.log(arrDiv)
// }
// numDivision(10)

// Даны два числа. Получите массив общих делителей этих чисел.

// const numDivision = (num1,num2) => {
// 	let arrDiv1 = [];
// 	let arrDiv2 = [];
// 	let arrDiv = [];

// 	for (let i = 1; i < num1; i++) {
// 		for (let j = 1; j < num2; j++) {
// 			if (num1 % i === 0 && num2 % j === 0){
// 				if(i == j){
// 					arrDiv.push(i)
// 				}
// 			}

// 		}


// 	}

// 	console.log(arrDiv)
// }
// numDivision(25,20)

//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

// const numDivision = num => {
// 	let arrDiv = [];
// 	for (let i = 1; i < num; i++) {
// 		if (num % i === 0 && i !== 1 && i !== num) {
// 			arrDiv.push(i);
// 		} else {
// 			if (arrDiv.length > 1) {
// 				console.log('число делителей больше одного делителя')
// 				break;
// 			}

// 		}

// 	}
// 	console.log(arrDiv)
// }
// 	numDivision(4)

//Через запятую написаны числа. Получите максимальное из этих чисел.

// function getMaxOfArray(str) {
//  	newstr = str.split(',').map(elem=>+elem);
// 	console.log(newstr);
// 	return Math.max.apply(null,newstr);
//   }
//   console.log(getMaxOfArray('1,2,3,4,5,6,7,8,9,0,22'))

// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

// let arrNum = [1, 2, 3, 4, 5, 77, 999, 999, 999, 999, 999, 999];
// const copyElement = arr => {
// 	let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i]);
//         newArr.push(arr[i]);
//     }
//     return newArr;
// };
// console.log(copyElement(arrNum));
// Дана строка. Удалите из нее все гласные буквы.


// let str = 'aaabsfsd caatrbx aabbx';
// let removedVowels = str.replace(/[aeiou]/gi, '');
// console.log(removedVowels);

// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
// let str = 'aaabsfsd caatrbx aabb';

// function capitalizeFirstLetter(str) {
// 	return str.split(' ').map(elem=>elem = elem.slice(0,elem.length-2) + elem.charAt(elem.length-1).toUpperCase()).join(' ');
// }
// console.log(capitalizeFirstLetter(str));
//Дан следующая структура:

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// // Найдите сумму элементов этой структуры.

// const sumObject = arr => {
// 	let sum = 0;
// arr.map(obj => {

// Object.values(obj).forEach((innerObj) => {

//     sum +=  Object.values(innerObj).reduce((a, b) => a + b, 0)
// })});
// return sum;
// }
// console.log(sumObject(data));

//Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

// const arr = [3, 3, 4, 3, 33, 3, 3, 3, 3, 3,];
// const arrthue = arr.join("").split("");
// const arrNew = arrthue.filter(num => num % 3 === 0);
// if (arrNew.length !== arrthue.length) { console.log('числа не содержат в себе 3'); }
// else { console.log('числа содержат в себе 3'); }
// console.log(arrthue);



// const friiArr = (arr) => {
// 	const result = arr.map(item => item.toString().includes('3'))
// 	console.log(result)
// }
// friiArr([13, 4, 23, 33])

// Дана строка в формате:

// let str = 'kebab-case';
// // Преобразуйте ее в формат:

// // 'snake_case'

// function toSnakeCase(str) {
// 	str = str.split('');
// 	let newstr = [];
// 	for (let i = 0; i < str.length; i++) {
// 		const element = str[i];
// 		if (element === '-') {
// 			newstr.push('_');
// 		} else {
// 			newstr.push(element);
// 		}
// 	}
// 	return newstr.join('');
// }
// console.log(toSnakeCase(str));



// function toSnakeCase(str) {
// 	return str.replace(/-/g, '_');
// }

// console.log(toSnakeCase(str));
// Дана строка в формате:
// let str = 'camelCase';
// // Преобразуйте ее в формат:

// // 'snake_case'

// const snakeCase = (str) => {
// 	str = str.split('');
// 	let newstr = [];
// 	for (let i = 0; i < str.length; i++) {
// 		const element = str[i];
// 		if (element === element.toUpperCase()) {
// 			newstr.push('_' + element.toLowerCase());
// 		} else {
// 			newstr.push(element);
// 		}
// 	}
// 	return newstr.join('');
// }
// console.log(snakeCase(str));

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

// const arrConstructor = (num) => {
// 	let arr = [];

// 	for (let i = 0; i < num; i++) {
// 		let newArr = [];
// 		if (i === num) { j = 1; }
// 		for (let j = 1; j <= num; j++) {

// 			newArr.push(j);
// 		}
// 		arr.push(newArr)
// 	}
// 	return arr;
// }
// console.log(arrConstructor(5));

// Дана строка. Проверьте, что эта строка состоит только из цифр.
// let str = '12f445'
// const numSearch = /^[0-9]+$/.test(str);
// console.log(numSearch)

// Дана строка. Проверьте, что эта строка состоит только из четных цифр.

// let str = '222 22 22 4'
// const numSearch = /^-?\d*[02468]$/.test(str);
// console.log(numSearch)

// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// let arr = [400, 25, 35, 45, 55, 65, 75, 85, 980, 32, 200, 5000];
// const zeroDawn = (arr) => {
// 	const result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const num = arr[i].toString().split('');
// 		let count = 0;
// 		for (let j = 0; j < num.length; j++) {
// 			if (+num[j] === 0) {
// 				count++;
// 			}
// 		}
// 		if (count < 2) {

// 			result.push(num.join(''));
// 		}
// 	}
// 	console.log(result);
// }
// zeroDawn(arr);

// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
// const one1000 = () => {
// 	const result = [];
// 	for (let i = 0; i < 1000; i++) {
// 		num = i.toString().split('').reduce((a, b) => +a + +b, 0);
// 		if (num === 13) { result.push(i) }
// 	}
// 	console.log(result);
// }
// one1000();

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// const arrConstructor = (num) => {
// 	let arr = [];
// 	let count = 0;

// 	for (let i = 0; i < num; i++) {
// 		let newArr = [];
// 		if (i === num) { j = 1; }
// 		for (let j = 1; j <= 3; j++) {
// 			count++;
// 			newArr.push(count);
// 		}
// 		arr.push(newArr)
// 	}
// 	return arr;
// }
// console.log(arrConstructor(4));