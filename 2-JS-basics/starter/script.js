console.log("Hi there")
/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*****************************
* CODING CHALLENGE 1 SOLUTION
*/

const MARK_MASS = 68
const MARK_HEIGHT = 1.75
const JOHN_MASS = 75
const JOHN_HEIGHT = 1.8

const markBMI = calculateBMI(MARK_MASS, MARK_HEIGHT);
const johnBMI = calculateBMI(JOHN_MASS, JOHN_HEIGHT);

const hasHigherBMI = () => {
  return markBMI > johnBMI
}


console.log("Is Mark's BMI higher than John's? ",hasHigherBMI() )

function calculateBMI (mass, height) {
  return mass / (height * height)
}
