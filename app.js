/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
 
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult = (age) => {
    if (age >= 18){
        return ("Adult");
    }else{
        return ("Minor");
    }
}


console.log('Exercise 2 Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
const isCharAVowel = char => {
    if (char == ["a", "e", "i","o","u" ]){
        return ("Vowel");
    }else{
        return ("Consonant");
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
function generateEmail(name, domain){
    return (`${name}@${domain}`)
}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
function greetUser(name, time){
    return (`"Good ${time}, ${name}!"`)
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree(a , b , c){
    if(a >= b && a >= c){
        return(a);
    } else if(b >=a && b >= c) {
        return(b);
    }else{return (c)}
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip(bill, gratuity){
    return (bill*gratuity/100)
}


console.log('Exercise 7 Result:', calculateTip(50, 20));
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
function takes the (temperature, current scale)
and checks the scale
if it's C, then take temp*(9/5)+32
and return the result and "Fahrenheit" 
otherwise if the scale is F, 
then take temp*(5/9)+32 and "Celsius"
*/
function convertTemperature(temp, scale){
    if(scale === 'C'){
        return((temp*9/5+32) + " Fahrenheit")
    } else if (scale === 'F') {
        return((temp*5/9+32)  + "Celsius") 
    }else{
        return ("ERROR")
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
function basicCalculator(first, second, operation){
    if(operation == 'add'){
        return(first + second)
    }else if(operation == 'subtract'){
        return(first - second)
    }else if(operation == 'multiply'){
        return(first * second)
    }else if(operation == 'divide'){
        return(first / second)
    }else{
        return("Error")
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
so the parameter is score
want to check the value of score
if 90+ A
80-89 B
70-79 C
60-69 D
59- F
*/
function calculateGrade(score){
    if(score >= 90){
       return("A")}
    else if(score < 90 && score >= 80){
    return('B')
    } else if(score < 80 && score >=70){
    return('C')
    } else if(score < 70 && score >= 60){
    return('D')
    } else{console.log('F')}
    }

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
It wants to deine a function of 2 parameters (first, last)
it wants to take a slice of the string of first
then take a slice of last
then count the total length of both names togther
then return all those parts as a single new string
*/
function createUsername(first, last){
    return(first.slice(0,3) + last.slice(0,3) + (first.length+last.length))
}


console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
arguments is an array of numbers
function counts the number of entries in the array
return the number of entries
*/
function numArgs(arguments){
    return(arguments.length)
}


console.log('Exercise 12 Result:', numArgs([1, 2, 3, 4, 6 , 76]));

// ROCK PAPER SCISSORS
// two users
// Rules:
// if both users have the same item then it's a tie

// paper beats rock
// rock beats scissors
// scissors beats paper

// write a function called rockingThePaper
// it will take in two parametes, user1 and user2
// check if user1 and user2 have the same item
// if they have the same item tell them it's a tie
// if user1 has paper:
        // then check user 2 has scissor then user 2 wins
        // else user 1 (rock) wins
// if user1 has rock:
        // then check user 2 has scissors then user 1 wins
        // else user 2 (paper) wins
// if user 1 has scissors:
        // then check user 2 has paper then user 1 wins
        // else user 2 (Rock) wins
// else i ask what in the world are you trying to do?!?!?

function rockingThePaper(left, right){
    if(left == right){
        return("Tie!")
    }else if(left == 'Rock' && right == 'Scissors'){
        return("Left Wins")
    }else if(left == 'Rock'  && right == 'Paper'){
        return("Right Wins")
    }else if(left == 'Scissors' && right == 'Paper'){
        return("Left Wins")
    }else if(left == 'Scissors'  && right == 'Rock'){
        return("Right Wins")
    }else if(left == 'Paper' && right == 'Rock'){
        return("Left Wins")
    }else if(left == 'Paper'  && right == 'Scissors'){
        return("Right Wins")
    }
}

console.log("Ro Sham Bo results " + rockingThePaper('Rock', 'Paper'))