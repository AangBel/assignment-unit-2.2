// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*///---------------------------------------------------
//---------------------------------------------------

// 1. WRITE YOUR DESCRIPTION HERE
// in line 36 it is establishing the let variable of name as Dane. 
// in line 38 through 42 theres an if statement which checks if the variable of name is exactly equal to Mary. it is not so it would move on
// -to the next line(40). on this line there is an else statement which sets the console to log How do you do if the IF before it was not true/valid.
// the console log would put out How do you do in this case. if the name were Mary, then the console log would state- hi mary!

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
//---------------------------------------------------

*/

// 2. WRITE YOUR DESCRIPTION HERE
// line 56 sets seccret as a variable but does not define it- which i think is ok to do just while its -
// - eventually done... line 58 sets code as a variable for 123. then it has a conditional-
// -if code is exactly 123 then...secret would be set to 'super' and code would multiply 123 *2. 
//- line 65 checks if the code (123) is greater than 250, which its not, but if it were then it would set-
//- the variable secret as 'duper'. line 69 then logs the variable of secret, which bc the first is true-
//- would be 'super'. 
//The value of secret and code before it hits the conditional would be that secret is undefined and code is 123. By the end, secret is set to super and the code of 123 has been multiplied by 2, 
//CODE
/*

let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)


//---------------------------------------------------
*/
// 3. WRITE YOUR DESCRIPTION HERE
// let isStudent is a variable that is established as a boolean-true. age is set at 34 and the zip is given the let variable for 55407. 
// Then, in an if statement the first condition checks if isStudent is true, which it is, and whether the zip is more than 80000, which it is not-
// -so bc only the first part is true, then it moves on to the second bc both (&&) are not true. line 87 checks if is student is false OR if age is -
//- under 30 - which it does not fulfill the second part because the age is 34 which is more than 30. so it would go on to the next line and -
//- this would log Welcome to Prime because isStudent is true/truthy. Else would not be triggered bc one of these conditions was activated. 
//CODE
/*

let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/


//---------------------------------------------------
//---------------------------------------------------
/*
// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/
//---------------------------------------------------
//---------------------------------------------------

//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
//FIX  colorOne is supposed to be set to blue, not red. colorTwo is *supposed to be red* and so is mix=true.the if -
// - is also incorrect as the directions state that if mix is true then both colorOne and colorTwo are set to 'purple'. -
//- the code written above just writes it for one.

//---------------------------------------------------
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//FIX we want variables so we would want to use let for both temp and time. in the conditional-
//- they use double pipes which is OR, and we want && for AND so it would then log throw away the food. 

//---------------------------------------------------
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
//FIX it asks for variables so we would want let for age and for minAge. for line 176, the symbol-
//- is wrong, it should be >= not <=. it is a way to do it but not what the description asks for- 
//- it asks for just 
// if(age >= minAge) {
//  console.log('enter');  
// }
//*feedback points out that a 21 year old would not be able to gain entry, so i would say that youd have to write an if for if underage, if 21 and if more than 21. possibly doing something like 
//- if (minAge === age){
//  console.log('enter');
//}
//---------------------------------------------------
//---------------------------------------------------


