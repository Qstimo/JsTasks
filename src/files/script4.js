
// Уровень 4.1 задачника JavaScript
//Сделайте функцию, которая вернет текущий день недели словом.
// const date = new Date();
// const options = { weekday: 'long' };
// const dayOfWeek = date.toLocaleString('Ru', options);

// console.log(dayOfWeek);

//Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.



// const dateFinc = str => {
//     const date = new Date(str);
//     console.log(date);
//     const options = { weekday: 'long' };
//     return `сегодня ${date.toLocaleString('Ru', options)} а ты всё ещё урод`
// }
// console.log(dateFinc('1995-12-18T03:24:00'));


// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам
// function convertSecondsToDays(seconds) {
//     const secondsInADay = 24 * 60 * 60;
//     const days = Math.floor(seconds / secondsInADay);
//     return days;
// }
// console.log(convertSecondsToDays(86400));

// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

// const strRev = (num, str) => {
//     const rev = [];
//     for (let i = 0; i <= num; i++) {
//         rev.push(str[i]);
//     }
//     return rev.join('');
// }
// console.log(strRev(7, 'atatata ury yti'))

// Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.

// function getZodiacSign(dates) {
//     const date = new Date(dates);
//     const month = date.getMonth() + 1; // Получаем месяц от 0 до 11, поэтому добавляем 1 для получения реального значения месяца
//     const day = date.getDate();

//     if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//         return "Aquarius";
//     } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
//         return "Pisces";
//     } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//         return "Aries";
//     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//         return "Taurus";
//     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//         return "Gemini";
//     } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//         return "Cancer";
//     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//         return "Leo";
//     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//         return "Virgo";
//     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//         return "Libra";
//     } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//         return "Scorpio";
//     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//         return "Sagittarius";
//     } else {
//         return "Capricorn";
//     }
// }

// console.log(getZodiacSign("2023-3-07"));

// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
// const sumDivision = (num) => {
//     const arrSum = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arrSum.push(i);
//         }
//     }
//     return arrSum.reduce((a, b) => a + b, 0);
// }

// console.log(sumDivision(4));

// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// const result = num => {
//     return num.toString().split("").reduce((a, b) => +a + +b, 0);
// }

// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

// const result = num => {
//     const num2 = num.toString().replace(/0/g, '');
//     return num2
// }
// console.log(result(202));

// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

const dataInfo = datas => {
    const dataR = new Date(datas);
    const actualData = new Date();
    const result = dataR.getDate() - actualData.getDate();
    if (result) {
        return `${Math.abs(result)} дней прошло`
    } else {
        return `${result} дней осталось`
    }
}
console.log(dataInfo('2021-05-01'))

const date = '2023-08-01T00:00:00.000Z'
let currentDate = Date.parse(new Date());
let days = (currentDate - Date.parse(date)) / 86400000;       //86400000 - ms в дне
console.log(Math.round(days))
console.log(currentDate)