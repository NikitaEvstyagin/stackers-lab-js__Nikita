//hw1

// const elPlusIndex = (array) => {
//     return array.map((element, index) => {
//         return (element + index + 1)%10;
//     });
// }
// arr = [1,2,4];
// console.log(elPlusIndex(arr));


//hw2

// const sumTwoMinimal = (array) => {
//     minFirst = Infinity;
//     minSecond = Infinity;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < minFirst){
//             minSecond = minFirst
//             minFirst = array[i]
//             }
//         else if (array[i] < minSecond)
//             minSecond = array[i]
//     }
//     return minFirst+minSecond
// }

// console.log(sumTwoMinimal([19, 5, 42, 2, 77]))

//hw3
// const colculate = (operator, num1, num2) => {
//     switch (operator){
//         case '+':
//             return num1+num2;
//         case '-':
//             return num1-num2;
//         case '*':
//             return num1*num2;
//         case '/':
//             return num1/num2;
//         default:
//             return "undefined operator"
//     }
// }
// console.log(colculate('+', 2, 3));
// console.log(colculate('-', 2, 3));
// console.log(colculate('*', 2, 3));
// console.log(colculate('/', 2, 3));