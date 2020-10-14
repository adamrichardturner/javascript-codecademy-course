/*
Race Day Project (Learning Conditional If Statements) --
Project Outline as per Codecademy

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

// Specify the race number as a random number rounded down to the nearest whole integer between 0 and 1000.
let raceNumber = Math.floor(Math.random() * 1000);
// Registree attendence time initialised to true
let earlyRegistree = true;
// Test condition, runner age will determine the output of the program.
let runnerAge = 15;

// If the runner is over 18 and registered early, add 1000 points to the race number.
if (runnerAge > 18 && earlyRegistree === true) {
  raceNumber += 1000;
}

// if runner over 18 and early, log the start-time (as per above) along with raceNumber, else if the runner is over 18 and late, log race at 11AM with race no. Else if under 18 race at 12:30. All other conditions, see registration desk (this occurs if the runner is exactly 18)
if (runnerAge > 18 && earlyRegistree === true) {
  console.log('You will race at 9:30 am. Your race number is: ' + raceNumber);
} else if (runnerAge > 18 && earlyRegistree === false) {
  console.log('You will race at 11:00 am. Your race number is: ' + raceNumber);
} else if (runnerAge < 18) {
  console.log('You will race at 12:30pm. Your race number is ' + raceNumber);
} else {
  console.log('See the registration desk');
}
