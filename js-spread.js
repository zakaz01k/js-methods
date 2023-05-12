// Method concat

// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const array = [1, 2, 3].concat(array2, array3);

// console.log(array);

// 6

// 1. Задача (легка): Напишіть функцію, яка виводить всі елементи масиву на консоль за допомогою методу forEach().

// const students = [
//   { name: "Denys", avg: 100 },
//   { name: "Dan", avg: 78 },
//   { name: "John", avg: 26 },
//   { name: "Niko", avg: 90 },
//   { name: "Omega", avg: 91 },
// ];

// const array = [1, 2, 3];

// world.forEach((human) => console.log(human));

// 2. Задача (легка): Напишіть функцію, яка повертає новий масив, що містить лише парні числа з вихідного масиву,
//    використовуючи метод filter().

// const newWorld = world.filter((item) => item % 2 === 0);

// 3. Задача (середня): Напишіть функцію, яка обчислює суму всіх чисел в масиві, використовуючи метод reduce().

// const sum = world.reduce((total, number) => {
//   return total + number;
// }, 0);

// 4. Задача (складніша): Напишіть функцію, яка приймає масив об'єктів студентів з полями "ім'я" та "середній бал",
//    і повертає новий масив з іменами студентів, які мають середній бал вище 90, використовуючи метод filter().

// const newStudents = students.filter((points) => points.avg > 90);

// 5. Задача (важка): Напишіть функцію, яка приймає масив цілих чисел та повертає новий масив, що містить всі можливі
//    комбінації пар чисел з вихідного масиву, які в сумі дають нуль. Наприклад, для вхідного масиву [1, 2, -3] результатом
//    буде [[1, -3], [2, -2]]. Використайте рекурсію та методи перебору масиву для вирішення цієї задачі.

// const getZeroSumPairs = (array) => {
//   const result = [];

//   const findPairs = (arr, currentPair) => {
//     if (currentPair.length === 2) {
//       if (currentPair[0] + currentPair[1] === 0) {
//         result.push(currentPair);
//       }
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       findPairs(arr.slice(i + 1), [...currentPair, arr[i]]);
//     }
//   };

//   findPairs(array, []);

//   return result;
// };

// const numbers = [1, 2, -3, 4, -2, -1, 3];
// const zeroSumPairs = getZeroSumPairs(numbers);
// console.log(zeroSumPairs);
