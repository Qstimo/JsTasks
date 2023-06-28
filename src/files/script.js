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

const reverseReg = str =>{
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element.toUpperCase() === element){
            newStr+= element.toLowerCase();
        } else if(element.toLowerCase() === element){
            newStr += element.toUpperCase();
        }

    }
    console.log(newStr)
}
reverseReg('AbCdE')