// You can enter your name here...
const userName = '';

// If username entered display it in greeting else display default Hello! statement.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// This is the question the user wants to ask the Magic 8 Ball.
const userQuestion = 'Will I stick to my study schedule this month?';

userName ? console.log(userName + " asked:" + userQuestion) : console.log('You asked: ' + userQuestion);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Switch Statement for Eightball

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1: 
    eightBall = 'It is decidedly so';
    break;
  case 2: 
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6: 
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'This is not possible';
    break;
}

console.log(eightBall);