//variables
var easyquiz = [];
easyquiz[0] = new easyQuestion("Which planet is the closest to Sun?", "Mercury", "Venus");
easyquiz[1] = new easyQuestion("What color is Mars?", "Red", "White");
easyquiz[2] = new easyQuestion("What is the name of the Earth's satellite?", "Moon", "Discovery");
easyquiz[3] = new easyQuestion("How many planets are in the Solar System ?", "8", "6");
easyquiz[4] = new easyQuestion("In which year men set foot on Moon?", "1969", "1988");
easyquiz[5] = new easyQuestion("Which astrophysicist is the Humanity's enemy?","Neil De Grasse Tyson", "Mohammed Ali");
easyquiz[6] = new easyQuestion("Aldebaran is a star of which constellation?", "Taurus", "Libra");
easyquiz[7] = new easyQuestion("How long is a day on Saturn?", "10h47", "3 days");
easyquiz[8] = new easyQuestion("How many satellites Pluto has?", "5", "4");
easyquiz[9] = new easyQuestion("Where do many comets come from?", "Oort cloud", "Saturn's belt");
easyquiz[10] = new easyQuestion("How many tails a comet have?", "2", "1");
easyquiz[11] = new easyQuestion("The Moon does the tour of Earth in how many days?", "28", "1");
easyquiz[12] = new easyQuestion("In which year the first exoplanet has been discovered?", "1989", "2004");

var easyrandomQuestion;
var easyanswers = [];
var easycurrentScore = 0;



document.addEventListener("DOMContentLoaded", function(event) { 
  easybtnProvideQuestion();
});

function easyQuestion(question,rightAnswer,wrongAnswer1) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    
    
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function easybtnProvideQuestion() { 
  
	var easyrandomNumber = Math.floor(Math.random()*easyquiz.length);
	easyrandomQuestion = easyquiz[easyrandomNumber]; //getQuestion
  easyanswers = [easyrandomQuestion.rightAnswer, easyrandomQuestion.wrongAnswer1];
  shuffle(easyanswers);
  
  document.getElementById("question").innerHTML= easyrandomQuestion.question;
  document.getElementById("easyanswerA").value= easyanswers[0];
  document.getElementById("easyanswerA").innerHTML= easyanswers[0];
  document.getElementById("easyanswerB").value= easyanswers[1];
  document.getElementById("easyanswerB").innerHTML= easyanswers[1];
  

  
  easyquiz.splice(easyrandomNumber, 1);
  console.log(easyquiz.length);
  


}

function easyanswerA_clicked() {
  var easyanswerA = document.getElementById("easyanswerA").value;
  	easycheckAnswer(easyanswerA);
}

function easyanswerB_clicked() {
		var easyanswerB = document.getElementById("easyanswerB").value;
  easycheckAnswer(easyanswerB);
}


function easyadjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    easycurrentScore += 10;
  } else {
    if (easycurrentScore > 0) {
      easycurrentScore -= 2;
  	}
  }
  document.getElementById("easyscore").innerHTML = easycurrentScore;
  easyendquiz();
}

function easycheckAnswer(answer) {  
  if (answer == easyrandomQuestion.rightAnswer) {
    easyadjustScore(true);
    easybtnProvideQuestion();
  } else { 
    easyadjustScore(false);
  }	 
}
function easyendquiz(){
  if(easyquiz.length == 0){
    alert("End of the easyquiz ! Your score is " + easycurrentScore + " !  Press finish");
}
}