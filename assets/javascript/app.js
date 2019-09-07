
var timer = 121;
var intervalId;

var game = {

    correct: 0,

    //Variables to grab HTML Ids

    timerCard: $("#timer"),
    questionCard: $("#questionsAnswers"),
    rules: $("#rules"),
    buttonClick: $("#startButton"),
    submitClick: $("#submitButton"),
    results: $("#resultsDisplay"),

    //Array of question objects
    questionsArray: [
        {
            question: "1. What is the fastest fish in the sea?",
            answers: ["Great White Shark", "Sailfish", "Triggerfish", "Stonefish"],
            correctAnswer: "Sailfish"
        },
        {
            question: "2. Which is the largest ocean in the world?",
            answers: ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Atlantic Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            question: "3. How many continents have coastlines on the Arctic Ocean?",
            answers: ["Four", "One", "Three", "Two"],
            correctAnswer: "Three"
        },
        {
            question: "4. How many hearts does an octopus have?",
            answers: ["One", "Seven", "Three", "Eight"],
            correctAnswer: "Three"
        },
        {
            question: "5. Which is the deepest ocean in the world?",
            answers: ["Arctic", "Atlantic", "Indian", "Pacific"],
            correctAnswer: "Pacific"
        },
        {
            question: "6. Where is a shrimp's heart located?",
            answers: ["Head", "Chest", "Tail", "Feelers"],
            correctAnswer: "Head"
        },
        {
            question: "7. Through how many oceans does the equator run?",
            answers: ["Four", "Two", "Three", "One"],
            correctAnswer: "Three"
        },
        {
            question: "8. Which of these sea creatures sleeps with one eye open and half their brain alert to keep vigilant for ocean threats?",
            answers: ["Dolphin", "Clownfish", "Shark", "Stonefish"],
            correctAnswer: "Dolphin"
        }

    ],

    //This function appends the timer, rules, and start button to the page
    openBrowser: function () {
        game.rules.append("<p>Let's see how much you know about the ocean and some of the sea creatures that call it home. Can you answer all the questions correctly in just two minutes? Click the button to start your quiz!</p>");
        game.rules.append('<br><button onclick="game.startGame()" id="startButton">Let\'s Start</button>');

        game.buttonClick.on("click", function () {
        })
    },

    //This function resets the game and sets the questions to the screen once the start button is pressed
    startGame: function () {
        window.scrollTo(0, 0);
        game.correct = 0;
        game.resetTimer();
        game.timer();
        game.timerCard.empty();
        game.rules.empty();
        game.results.empty();

        //This appends the questions and answers to the page using a loop and a nested loop 
        for (var i = 0; i < game.questionsArray.length; i++) {
            game.questionCard.append("<p>" + game.questionsArray[i].question + "</p>")
            for (var j = 0; j < game.questionsArray[i].answers.length; j++) {
                game.questionCard.append(`<input type=radio value= "${game.questionsArray[i].answers[j]}" name=${i}> ${game.questionsArray[i].answers[j]} <br>`)
            }
        }
        //This appends the submit button at the bottom of the page
        game.questionCard.append('<button onclick="game.submitAnswers()" id="submitButton">Submit</button>');

        game.questionCard.on("click", function () {
        })
    },

    //This function begins the timer once the start button has been pressed
    timer: function () {

        clearInterval(intervalId);
        intervalId = setInterval(game.timerCountDown, 1000)
    },

    //Resets the timer to 121 seconds
    resetTimer: function () {
        timer = 121;
        game.timerCard.html("<span>- Timer: " + timer + " seconds remaining -</span>")
    },

    //Creates a countdown timer that stops and goes to results page when the timer reaches zero
    timerCountDown: function () {
        timer--;
        game.timerCard.html("<span>- Timer: " + timer + " seconds remaining -</span>")
        if (timer === 0) {
            game.timerStop();
            game.submitAnswers();
        }
    },

    //Clears the timer interval
    timerStop: function () {
        clearInterval(intervalId);
    },

    //This function stops the timer and clears the questions once the submit button is pressed
    submitAnswers: function () {
        console.log("inside submitAnsers")
        game.timerCard.empty();
        game.createScore();
        game.questionCard.empty();
        game.timerStop();
        window.scrollTo(0, 0);

    },

    //This function calculates how many answers were correct and outputs the score to the screen along with a reset button
    createScore: function () {

        // console.log($("input:checked").val());
        console.log("inside create score")
        
        // userGuess = document.getElementById(game.questionsArray[0].correctAnswer);
        for (var i = 0; i < this.questionsArray.length; i++){

        console.log($("input[name="+i+"]:checked").val(),game.questionsArray[i].correctAnswer,i);
        if ($("input[name="+i+"]:checked").val() === game.questionsArray[i].correctAnswer) {
            game.correct++;

        }
    }
        game.results.append("<h2>Congratulations! Here are your results</h2><p>You got " + game.correct + " out of 8 questions correct.</p>")
        game.results.append('<button onclick="game.startGame()">Try Again</button>');
        game.results.on("click", function () {
        })

    },

}

//Let's run the game!
game.openBrowser();











