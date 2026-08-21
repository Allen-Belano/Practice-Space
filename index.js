/* function lifeInWeeks(age) {

    var yearsRemaining = 90 - age;
    var daysRemaining = yearsRemaining * 365;
    var weeksRemaining = yearsRemaining * 52;
    var monthsRemaining = yearsRemaining * 12;

    console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left to live.");
}

var userAge = prompt("What is your age?");
lifeInWeeks(Number(userAge)); */


//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {  
    var bmi = weight / (height * height);
    return Math.round(bmi);
}


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/