const STORE = [
  {
    question: "<img src=\"Gucci.jpg\"/>",
      b: 'Gucci',
    answers: {
      a: 'Prada',
      c: 'Fendi',
      d: 'Hermes'
    },
    correctAnswer: "b"
  },
  {
    question: "<img src=\"Versace.jpg\"/>",
    answers: {
     a: 'Louis Vuitton',
     b: 'Carolina Herrera',
     c: 'Alexander Wang',
     d: 'Versace'
     },
    correctAnswer: "d"
  },
  {
    question:"<img src=\"DVF.jpg\"/>",
    answers: {
     a: 'Diane Von Furstenberg',
     b: 'Tory Burch',
     c: 'Stella McCartney',
     d: 'Moschino'
    },
    correctAnswer: "a"
  },

 question: "<img src=\"Telfar.jpg\"/>",
    answers: {
      a: 'Pyer Moss',
      b: 'Off White',
      c: 'Telfar ',
      d: 'Chromat'
    },
    correctAnswer: "c"
  },

   question:"<img src=\"LV-Speedy.jpg\"/>",
    answers: {
      a: 'Comme Des Garçons',
      b: 'Alexander Mcqueen',
      c: 'Louis Vuitton',
      d: 'Dior'
    },
    correctAnswer: "c"
  },

  question: "<img src=\"Dior-New-Look.jpg\"/>" ,
    answers: {
      a: 'Miu Miu',
      b: 'Dior',
      c: 'Yves Saint Laurent',
      d: 'Chanel'
    },
    correctAnswer: "b"
  },

   question: "<img src=\"MachxMach.jpg\"/>",
    answers: {
      a: 'Mach & Mach',
      b: 'Bande Noir',
      c: 'Kelsey Randall',
      d: 'Kalmanovich'
    },
    correctAnswer: "a"
  },

   question:"<img src=\"AnnDemeulemeester.jpg\"/>",
    answers: {
      a: 'Comme des Garcons',
      b: 'Jil Sander',
      c: 'Dries Van Noten',
      d: 'Ann Demeulemeester' 
    },
    correctAnswer: "d"
  },

   question: "<img src=\"Givenchy.jpg\"/>",
    answers: {
      a: 'Rick Owens',
      b: 'Vivienne Westwood',
      c: 'Givenchy',
      d: 'Prada'
    },
    correctAnswer: "c"
  },

   question: "<img src=\"Pyer-Moss.jpg\"/>",
    answers: {
      a: 'Off White',
      b: 'Pyer Moss',
      c: 'Rick Owens',
      d: 'Gucci'
    },
    correctAnswer: "b"
  },
];
//variables to hold score and question number//
let currentQuestion: 0,
let score: 0
};

//generate each question//
function createQuestion() {
  if (currentQuestion < STORE.length) {
    return createThing(questionNumber);
  } else {
    finalScore();
    $('.currentQuestion').text(10);
  }
//increments the number value of the "score" variable by one
//and updates the "score" number text in the quiz view//
}
function updateScore() {
  score++;
  $('.score').text(score);
}

//increments the number value of the "question number" variable by one
//and updates the "question number" text in the quiz view
function updateQuestionNumber() {
  currentQuestion++;
  $('.currentQuestion').text(questionNumber + 1);
}

//resets the text value of the "question number" and "score" variables
//and updates their repective text in the quiz view
function resetStats() {
  score = 0;
  currentQuestion = 0;
  $('.score').text(0);
  $('.questionNumber').text(0);
}
//begins the quiz
function startQuiz() {
  $('.startButton').on('click',function (event) {
    $('.questionNumber').text(1);
  });
}

//submits a selected answer and checks it against the correct answer
//runs answer functions accordingly
function submitAnswer() {
  $('.text-box').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correct = STORE[currentQuestion].correctAnswer;
    if (answer === correct) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  });
}
//creates html for question form
function renderAQuestion() {
  let question = STORE.questions[STORE.currentQuestion];
  updateQuestionAndScore();
  const questionHtml = $(`
    <div class="text-box">
      <section class="multiple-choice">
            <input type="radio" name="action" id="first" value="first" /><label for="first">a. Off White</label><br />
            <input type="radio" name="action" id="second" value="second" /><label for="second">b. Pyer Moss </label><br />
            <input type="radio" name="action" id="third" value="third"/><label for="third">c. Rick Owens</label><br />
            <input type="radio" name="action" id="fourth" value="fourth" /><label for="fourth">d. Gucci</label><br />
      </section>
      </div>;
$("main").html(questionHtml);
updateOptions();
$("#next-question").hide();
}
