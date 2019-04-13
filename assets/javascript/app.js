$(document).ready(function () {

    var number = 60;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var labels = ["first", "second", "third", "forth"];
    var myQuestions = [{
        question: "Which is NOT a gaming console?",
        choices: ["PlayStaion 4", "GameCast", "Xbox One", "Wii U"],
        name: "console",
        choicesAnswer: "GameCast",
        divClass: ".console"
    },
    {
        question: "What city does Bamtman protect?",
        choices: ["New York City", "Chicago", "Gotham City", "Dallas"],
        name: "batman",
        choicesAnswer: "Gotham City",
        divClass: ".batman"
    },
    {
        question: "Who are the rivals of the Autobots?",
        choices: ["The Avengers", "The Justice League", "The BadBots", "The Decepticons"],
        name: "autobots",
        choicesAnswer: "The Decepticons",
        divClass: ".autobots"   
    },
    {
        question: "Who is NOT a Teenage Mutant Ninja Turtle?",
        choices: ["Vincent", "Donatello", "Leonardo", "Raffael"],
        name: "tmnt",
        choicesAnswer: "Vincent",
        divClass: ".tmnt"
    },
    {
        question: "What is Rick Snachez's catch phrase?",
        choices: ["Aw, Jeez! ", "Get Schwifty", "Wubba Lubba Dub Dub", "I'm Pickle Rick"],
        name: "rick",
        choicesAnswer: "Wubba Lubba Dub Dub",
        divClass: ".rick"
    },
    {
        question: "Who does Mario save in every Super Mario game?",
        choices: ["Luigi", "Yoshi", "Princess Peach", "Bowser"],
        name: "mario",
        choicesAnswer: "Princess Peach",
        divClass: ".mario"
    },
    {
        question: "Who created Mega Man?",
        choices: ["Dr. Light", "Eddie", "Proto Man", "Dr. Willy"],
        name: "megaman",
        choicesAnswer: "Dr. Light",
        divClass: ".megaman"
    },
    {
        question: "What is Homer Simpsons' brother's name?",
        choices: ["Otto", "Hans Moleman", "Abe Simpson", "Herb Powell"],
        name: "homer",
        choicesAnswer: "Herb Powell",
        divClass: ".homer"
    },
    {
        question: "Who created TV series such as The Simpsons, Futurama, and Disenchantment?",
        choices: ["Justin Roiland", "Matt Groening", "Stan Lee", "Seth Macfarlane"],
        name: "matt",
        choicesAnswer: "Matt Groening",
        divClass: ".matt"
    },
    {
        question: "Who is the leader of the X-Men?",
        choices: ["Wolverine", "Cyclops", "Magneto", "Professor X"],
        name: "xmen",
        choicesAnswer: "Professor X",
        divClass: ".xmen"
    }
    ]

    $("#timeRemaining").hide();
    $("#timer").hide();
    $("#submit").hide();
    $("#score").hide();
    $(".questions").hide();

    $("#start").on("click", function () {
        $("#start");
        startGame();

    })

    function startGame() {
        $("#start").remove();
        $("#welcome").remove();
        $(".questions").show();

        createQuiz();
    }

    function createQuiz() {
        runTimer();
        $("#timeRemaining").show();
        $("#timer").show();
        $("#submit").show();

        for (var i = 0; i < 10; i++) {
            $(".questions").prepend('<div class="' + myQuestions[i].name + '"></div>');
            $(myQuestions[i].divClass).append('<h3 class ="questionTitle">' + myQuestions[i].question + '</h3>');

            for (var j = 0; j <= 3; j++) {
                $(myQuestions[i].divClass).append('<input type="radio" name="' + myQuestions[i].name + '"value="' + myQuestions[i].choices[j] + '"/><label for="' + labels[i] + '">' + myQuestions[i].choices[j] + '</label>');
            }
            $(".questions").prepend('<br />');
        }

    }

    function gradeQuiz() {

        for (var i = 0; i < 10; i++) {

            if ($('input:radio[name="' + myQuestions[i].name + '"]:checked').val() === myQuestions[i].choicesAnswer) {
                correctAnswers++;
                console.log("Correct");
            } else {
                incorrectAnswers++;
                console.log("Incorrect");
            };
        };
    }

    $("#submit").on("click", function () {
        gradeQuiz();
        stop();
        $("#score").show();
        $("#timeRemaining").hide();
        $("#timer").hide();
        $(".questions").hide();
        $("#submit").hide();
        $("#correct").html("Correct: " + correctAnswers);
        $("#incorrect").html("Incorrect: " + incorrectAnswers);
    })

    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    }

    function decrement() {
        $("#timer").html("<h2>" + number + "</h2>");

        number--;

        if (number === 0) {
            stop();
            gradeQuiz();
            $("#score").show();
        $("#timeRemaining").hide();
        $("#timer").hide();
        $(".questions").hide();
        $("#submit").hide();
        $("#correct").html("Correct: " + correctAnswers);
        $("#incorrect").html("Incorrect: " + incorrectAnswers);
        }
    }

    function stop() {
        clearInterval(intervalId);
    }
});