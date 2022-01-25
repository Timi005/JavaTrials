
(function () {
    //The Build function!!!
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(`<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`);
            }
                // output.push(
                //     `<div class="question">${currentQuestion.question}</div>
                //     <div class="answers">${answers.join('')}</div>`
                // );
                output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
              </div>`
            );
        }
    );
    quizBody.innerHTML = output.join('');
}


// Displaying the result function!!!
function showResults(){
    const answerCollector = quizBody.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( 
        (currentQuestion, questionNumber) => {
        const answerContainer = answerCollector[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerCollector[questionNumber].style.color = "green";
            
        }
        else{
            answerCollector[questionNumber].style.color = "red";
        }
    }
    );

    results.innerHTML = `Score: ${numCorrect} out of ${myQuestions.length}`;

}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
// Variables 
const quizBody = document.getElementById("quiz_body");
const results = document.getElementById("results");
const submitButton = document.getElementById("submit");


//The QUestions
const myQuestions = [{
    question: "Who is the CEO of Krunch Clothing Apparel?", 
    answers: {
        a: "Timi",
        b: "Excellence",
        c: "Seyi",
        d: "Banky"
    },
    correctAnswer: "b"
},
{
    question: "Who was the first ambassador for Krunch Clothing Apparel?", 
    answers: {
        a: "Timi",
        b: "Excellence",
        c: "Seyi",
        d: "Banky"
    },
    correctAnswer: "d"
},
{
    question: "What year was Krunch Clothing Apparel established?", 
    answers: {
        a: "1998",
        b: "2005",
        c: "1988",
        d: "2007"
    },
    correctAnswer: "c"
}
];

// Calling the functions
buildQuiz();
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
  })
  ();
