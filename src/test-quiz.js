//variables
var quiz = [];
quiz[0] = new Question("Which planet is the closest to Sun?", "Mercury", "Venus", "Mars", "Earth");
quiz[1] = new Question("What color is Mars?", "Red", "White", "Green", "Dark");
quiz[2] = new Question("What is the name of the Earth's satellite?", "Moon", "Discovery", "Astra", "Spoutnik");
quiz[3] = new Question("How many planets are in the Solar System ?", "8", "6", "4", "7");
quiz[4] = new Question("In which year men set foot on Moon?", "1969", "1988", "1968", "1967");
quiz[5] = new Question("Which astrophysicist is the Humanity's enemy?","Neil De Grasse Tyson", "Mohammed Ali", "Joe Frazier", "Georges Foreman");
quiz[6] = new Question("Aldebaran is a star of which constellation?", "Taurus", "Libra", "Scorpio","Cancer");
quiz[7] = new Question("How long is a day on Saturn?", "10h47", "3 days", "17h45","2 months");
quiz[8] = new Question("How many satellites Pluto has?", "5", "4", "3","1");
quiz[9] = new Question("Where do many comets come from?", "Oort cloud", "Saturn's belt", "Sun","Kirk cloud");
quiz[10] = new Question("How many tails a comet have?", "2", "1", "4","3");
quiz[11] = new Question("The Moon does the tour of Earth in how many days?", "28", "1", "7","365");
quiz[12] = new Question("In which year the first exoplanet has been discovered?", "1989", "2004", "1965","1976");

var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2,wrongAnswer3) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
    this.wrongAnswer3 = wrongAnswer3;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2, randomQuestion.wrongAnswer3];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];
  document.getElementById("answerD").value= answers[3];
  document.getElementById("answerD").innerHTML= answers[3];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}
function answerD_clicked() {
  var answerD = document.getElementById("answerD").value;
		checkAnswer(answerD);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
  } else {
    if (currentScore > 0) {
      currentScore--;
  	}
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    adjustScore(false);
  }	  
}
