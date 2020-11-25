var readLineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;
var userName = chalk.italic.red(readLineSync.question(chalk.bold.blueBright("What's your name? ")));

console.log(chalk.italic.cyanBright(userName+", Welcome to the quiz!"));
console.log(chalk.bgYellow.underline("Rules:-"));
console.log(chalk.whiteBright("1. You will get multiple choice questions."));
console.log(chalk.whiteBright("2. Choose your option carefully as you can't change your answer after you select one of the options.You don't have to press enter after choosing your option."));
console.log(chalk.whiteBright("3. Scores : +1 for correct answer, 0 for passing, -1 for incorrect answer "));
console.log(chalk.bold.underline.bgCyanBright("All the best!!"));
console.log();

function play(i,optionList,question,answer,noOfQuestions){
  console.log(chalk.magentaBright("Q.",i+1+"/"+noOfQuestions));
  var index = readLineSync.keyInSelect(optionList,chalk.yellowBright(question));  
  var userAnswer = optionList[index];
  
  if(userAnswer === answer){
    score++;
    console.log(chalk.greenBright.italic.bold("Correct!"));
  }
  else if(index == "-1"){
    console.log(chalk.white.italic.bold("You chose to skip this question"));
  }
  else{
    score--;
    console.log(chalk.redBright.italic.bold("Incorrect!"));
  }

  console.log(chalk.dim.underline("Your current score is: "+score));
  if(i<noOfQuestions-1){
    if (!readLineSync.keyInYN(chalk.blueBright('Do you want to play more?'))){
    // Key that is not `Y` was pressed.
    console.log(chalk.blueBright("----------")); 
    console.log(chalk.bold.underline.italic.bgYellowBright("Your total score is "+score));
    process.exit();
    }
    }
  else{
    console.log(chalk.blueBright("----------")); 
    console.log(chalk.bold.underline.italic.bgYellowBright("Your total score is "+score));
    process.exit();
  }
  console.log(chalk.cyanBright("----------"));  
}

var questions = [{
  options:["'I Tell You, When I Actually Die, Some People Are Going To Get Seriously Haunted!'","'We were on a break!'","anti-Rachel club","'Seriously good luck marrying me'"],
  question:"Which of the above options is not associated with Ross? ",answer:"'Seriously good luck marrying me'"
},{
  options:['Los Angeles','Las Vegas','New York','Tulsa'],
  question:"In which city did Chandler had had to go for job? ",
  answer:"Tulsa"
},{
  options:['Ross','Phoebe','Joey','Rachel'],
  question:"Who did Monica never kiss? ",
  answer:"Joey"
},{
  options:['Phoebe','Ross','Rachel','MOnica'],
  question:"Who went for an acting role along with Joey",
  answer:"Phoebe"
}
]

for(var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  play(i,currentQuestion.options,currentQuestion.question, currentQuestion.answer,questions.length);
}