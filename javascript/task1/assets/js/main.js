// 1- Write a program that allow to user enter number then print it
// Example

// Input: 5

// Output: 5

// var num = +prompt('Please Enter Your Number');

// console.log('You Enterd' + ' ' + num);



// 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// Example1
// Input: 12 Output Yes Example 2
// Input: 9 Output No




// var devidedNum = Number(prompt('Please Enter Your Number'));


//         if (devidedNum % 4 == 0 && devidedNum % 3 == 0){

//             console.log('The number you entered' + ' is ' + devidedNum + ' and it can devided by 3 & 4')
        
//         } else if (devidedNum % 3 == 0){
        
//             console.log('The number you entered' + ' is ' + devidedNum + ' and it can devided by 3')
        
//         } else if (devidedNum % 4 == 0) {
        
//             console.log('The number you entered' + ' is ' + devidedNum + ' and it can devided by 4')
        
//         }else {
            
//             console.log('Your number is ' + devidedNum + ' cannot be devided to 3 / 4')
        
//         };



// 3- Write a program that allows the user to insert 2 integers then print the max 

// Example1
// Input: 3 5
// Output: 5

// Example 2
// Input: 10 7
// Output: 10



// var num1 = +prompt('Please Enter The First Number:'),
//     num2 = +prompt('Please Enter The Second Number:');


//     if (num1 > num2) {
        
//         console.log('You Enterd ' + num1 + ', ' + num2 + ' and Greatest Number Is: ' + num1);

//     } else if (num2 > num1) {

//         console.log('You Enterd ' + num1 + ', ' + num2 + ' and Greatest Number Is: ' + num2);

//     } else {

//         console.log('You Enterd ' + num1 + ', ' + num2 + ' and Two Numbers Is Equal');
// }




// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// Example 1
// Input: -5
// Output negative 

// Example2
// Input: 10
// Output positive


// var num = +prompt('Please Enter The Number:')

// if (num < 0) {

//     console.log('You Entered ' + num + ' and It Is A Negative Number')

// } else if (num > 0) {

//     console.log('You Entered ' + num + ' and It Is A Positive Number')

// } else {

//     console.log('You Entered ' + num + ' and It Is Not A Positive or A Negative Number')
// }


// 5- Write a program that take 3 integers from user then print the max element and the min element.

// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5

// var num1 = Number(prompt('Please Enter The First Number')),
//     num2 = +prompt('Please Enter The Second Number'),
//     num3 = parseInt(prompt('Please Enter The Third Number'));
 

// if (num1 > num2 && num1 > num3) {

//     console.log('You Entered ' + num1 + ' ' + num2 + ' ' + num3 + ' and The Greatest Number Is ' + num1 )

// } else if (num2 > num1 && num2 > num3) {

//     console.log('You Entered ' + num1 + ' ' + num2 + ' ' + num3 + ' and The Greatest Number Is ' + num2)

// } else if( num3 > num1 && num3 > num2) { 

//     console.log('You Entered ' + num1 + ' ' + num2 + ' ' + num3 + ' and The Greatest Number Is ' + num3)

// }else {
//     console.log('You Entered Two Or More Equal Numbers')
// }

// if (num1 < num2 && num1 < num3) {

//     console.log('The Smallest Number Is ' + num1)

// } else if (num2 < num1 && num2 < num3) {

//     console.log('The Smallest Number Is ' + num2)

// } else if( num3 < num1 && num3 < num2) { 

//     console.log('The Smallest Number Is ' + num3)

// }


// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// Example 1
// Input: 8
// Output: even
// Example 2
// Input: 7
// Output: odd


// var num = +prompt('Please Enter a Number:')

// if (num % 2 == 0) {

//     console.log('You Enterd ' + num + ' and It Is An Even Number')

// } else {

//     console.log('You Entered ' + num + ' and It Is An Odd Number')

// }



// 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant


// var character = prompt('Please Enter A Character To Figure Out If It AN Vowel Char Or Consonant Char')


// if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' || character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U') {

//     console.log('You Etered ' + character + ' Character and It Is A Vowel Char')

// } else if (character != 'a' || character != 'e' || character != 'i' || character != 'o' || character != 'u' || character != 'A' || character != 'E' || character != 'I' || character != 'O' || character != 'U') {

//     console.log('You Etered ' + character + ' Character and It Is A Consonant Char')

// } else{

//     console.log('You Entered a Number')

// }



// 8- Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// Example Input 5
// Output 1, 2, 3, 4, 5

// var num = +prompt('Enter Number:');

// for (var i = 1; i <= num; i++) {

//     console.log(i)

// }


// 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// Example Input: 5 Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60


// var num = parseInt(prompt('Please Enter Number:'))

// for (var i = 1; i <= 12; i++) {

//     console.log(num * i);

// }


// 11- Write a program that allows to user to insert number then print all even numbers between 1 to this number

// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14


// var num = Number(prompt("Please Enter a Number:"))

// for (var i= 0; i <= num; i++) {

//     if (i % 2 == 0){

//         console.log(i);
//     }

// }



// 12- Write a program that take two integers then print the power Example:

// Input: 4 3
// Output: 64 Hint how to calculate 4^3 = 4 * 4 * 4 =64


// var num1 = +prompt("Please Enter The Number:")
// var num2 = +prompt("Please Enter The Power Number:")

// var power = Math.pow(num1, num2);

// console.log('The Power Of ' + num1 + ' Is ' + power)



// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
// Average Marks =87
// Percentage =87


// var sub1 = +prompt('Please Enter Subject 1 Marks:'),
//     sub2 = +prompt('Please Enter Subject 2 Marks:'),
//     sub3 = +prompt('Please Enter Subject 3 Marks:'),
//     sub4 = +prompt('Please Enter Subject 4 Marks:'),
//     sub5 = +prompt('Please Enter Subject 5 Marks:')
   

//     // We Can Use 3 Function To Calculate The Sum, Average and Percentage
//    function sum() {

//     var sum = sub1 + sub2 + sub3 + sub4 + sub5;

//     return sum;

//    }

//    function average() {

//     var average = (sum() / 5);

//     return average;

//    }

//    function percentage() {

//     var percentage = (sum() / 500) * 100;

//     return percentage;

//    }

//     ---------------------------------------------------------------------------
//     // Or We Can Use 3 Variables To Calculate The Sum, Average and Percentage
   
//     // sum = sub1 + sub2 + sub3 + sub4 + sub5,
//     // average = sum / 5,
//     // percentage = (sum / 500) * 100;
//     ---------------------------------------------------------------------------
 
//     console.log("You've Enterd The Following Marks  :")
//     console.log(sub1 + ' for Subject 1' + ' and ' + sub2 + ' for Subject 2' + ' and ' + sub3
//     + ' for Subject 3' + ' and ' + sub4 + ' for Subject4' + ' and ' + sub5 + ' for Subject 5')

    // console.log('The Sum Of Your Marks Is ' + sum()) 
    // console.log('The Average Of Your Marks Is ' + average())
    // console.log('Your Percentage Is: ' + percentage() + '%')


// 13- Write a program to input month number and print number of days in that month.

// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31


// var month = +prompt('Please Enter Month Number Which You Want To Know Its Days Number:');


// switch (month) {

//     case 1:
//         console.log('Days In January are 31 Days');
//         break;

//     case 2:
//         console.log('Days In February are 28 Days');
//         break;

//     case 3:
//         console.log('Days In March are 31 Days');
//         break;

//     case 4:
//         console.log('Days In April are 30 Days');
//         break;

//     case 5:
//         console.log('Days In May are 31 Days');
//         break;

//     case 6:
//         console.log('Days In June are 30 Days');
//         break;

//     case 7:
//         console.log('Days In July are 31 Days');
//         break;

//     case 8:
//         console.log('Days In August are 31 Days');
//         break;

//     case 9:
//         console.log('Days In Sebtember are 30 Days');
//         break;

//     case 10:
//         console.log('Days In october are 31 Days');
//         break;

//     case 11:
//         console.log('Days In November are 30 Days');
//         break;

//     case 12:
//         console.log('Days In December are 31 Days');
//         break;

//     default:
//         console.log('You Entered Unknown Month');

// }



// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F


// var Physics = +prompt('Please Enter Your Physics Grade:'),
//     Chemistry = +prompt('Please Enter Your Chemistry Grade:'),
//     Biology = +prompt('Please Enter Your Biology Grade:'),
//     Mathematics = +prompt('Please Enter Your Mathematics Grade:'),
//     Computer = +prompt('Please Enter Your Computer Grade:'),
//     sum = Physics + Chemistry + Biology + Mathematics + Computer,
//     average = (sum / 500) * 100;



// if (average >= 90) {

//     console.log('Your Average Is ' + average + '% and You Got Grade A')

// } else if (average >= 80) {

//     console.log('Your Average Is ' + average + '% and You Got B Grade')

// } else if (average >= 70) {

//     console.log('Your Average Is ' + average + '% and You Got C Grade')

// } else if (average >= 60) {

//     console.log("Your Average Is ' + average + '% and You Got Grade D")

// } else if (average >= 40) {

//     console.log('Your Average Is ' + average + '% and You Got Grade E')

// } else {

//     console.log('Your Average Is ' + average + '% and You Got Grade F')

// }



//  Using Switch Caes

//  15- Write a program to print total number of days in month

// var days = parseInt(prompt('Please Enter Days Number To Figure Out Which Month / Months Contain This Number:'))

// switch (days) {

//     case 28:
//     case 29:
//         console.log('Only February has ' + days + ' Days!')
//         break;

//     case 31:
//         console.log('January, March, May, July, August, October and December have ' + days + ' Days!')
//         break;

//     case 30:
//         console.log('April, June, August, September and November have ' + days + ' Days!')
//         break;
    
//     default:
//         console.log('The Number You Entered Does not Belong To Any Month')
// }


// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = prompt('Please Enter a Character To Figure Out If It Vowel Or Consonant Char:')

// switch (char) {

//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U':
//         console.log('You Entered a vowel character');
//         break;

//     default: 
//     console.log('You Entered a Consonant character');
        
// }



// // // 17- Write a program to find maximum between two numbers

var num1 = +prompt('Enter First Number:')
var num2 = +prompt('Enter Second Number')

switch (true) {

    case num1 > num2:

        console.log(num1 + ' Is the Greatest and ' + num2 + ' Is The Smallest')
        break;
    
    case num1 = num2:
        
        console.log(num1 + ' and ' + num2 + ' Are Equals')
        
        
    default:
        console.log(num2 + ' Is the Greatest and ' + num1 + ' Is Ther Smallest')

}




// 18- Write a program to check whether a number is even or odd


// var num = Number(prompt('Please Enter a Number To Figure Out If It Even Or Odd Number:')),
//     stats = num % 2;

// switch (stats) {

//     case 0:
//         console.log('You Entered An Even Number')
//         break;

//     case 1:
//         console.log('You Entered An Odd Number')  
//         break;  
    
//     default:
//         console.log('Please Enter A Valid Number')
// }


// 19- Write a program to check whether a number is positive or negative or zero

// var num = Number(prompt('Please Enter a Number:'))

// switch (true) {

//     case num == 0:
    
//         console.log('You Entered 0');
        
//         break;

//     case num > 0:
        
//         console.log('You Entered A Positive Number');
        
//         break;

//     default:
//         console.log('You Entered A Negative Number');
//         break;


// }


// 20- Write a program to create Simple Calculator

// var num1 = +prompt('Enter First Number');
// var sign = prompt('Enter You Calculation Sign From The Following: ( +, -, *, /');
// var num2 = +prompt('Enter Second Numebr');

// switch (sign) {

//     case '+':
//         console.log('You Entered ' + num1 + ' ' + sign + ' ' + num2 + ' and The Result Is ' + (num1 + num2))
//         break;

//     case '-':
//         console.log('You Entered ' + num1 + ' ' + sign + ' ' + num2 + ' and The Result Is ' + (num1 - num2))
//         break;

//     case '*':
//         console.log('You Entered ' + num1 + ' ' + sign + ' ' + num2 + ' and The Result Is ' + (num1 * num2))
//         break
    
//     case '/':
//         if (num2 == 0){console.log('Cannot Devide to 0')}
//         break;

//         console.log('You Entered ' + num1 + ' ' + sign + ' ' + num2 + ' and The Result Is ' + (num1 / num2))
//         break;

//     default:
//         console.log('Invalid Proccess, Please Enter a Valid Calculation Sign')

// }