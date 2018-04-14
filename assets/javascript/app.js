var count = 25;
var intervalId;
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var answers = []

$(document).ready(function () {

    // define click events
    $("#start").on("click", startGame);
    $("#reset").on("click", resetGame);
    $("#scoreboard").hide();
    $("#submit").on("click", displayScore);
    $("input[type=radio]").attr('disabled', true);

    // update score 
    $("input[id=Jack]").on("click", function () {
        correctAns++;
    });
    $("input[id=Scotland]").on("click", function () {
        correctAns++;
    });
    $("input[id=Caddyshack]").on("click", function () {
        correctAns++;
    });
    $("input[id=Tiger]").on("click", function () {
        correctAns++;
    });
    $("input[id=Jean]").on("click", function () {
        correctAns++;
    });
    $("input[id=Tom]").on("click", function () {
        correctAns++;
    });
    $("input[class=wrong]").on("click", function () {
        incorrectAns++;
    });

    if (!$('input[name="old"]').is(':checked')) {
        unanswered++;
    } 


    function startGame() {
        intervalId = setInterval(decrement, 1000);
        $("input[type=radio]").attr('disabled', false);
    }

    function decrement() {
        count--;
        $("h3").text("Time Remaining: " + count);

        if (count === 0) {
            stopGame();
            displayScore();
        }
    }

    function stopGame() {
        clearInterval(intervalId);
    }

    function resetGame() {
        count = 15;
        correctAns = 0;
        incorrectAns = 0;
        unanswered = 0;
        $("h3").text("Time Remaining: " + count);
        $("#scoreboard").hide();
        $("#question-container").show();
        $("input[type=radio]").prop("checked", false);
        stopGame();
        $("input[type=radio]").attr('disabled', true);
    }

    function displayScore() {
        $("#scoreboard").show();
        $("#question-container").hide();
        $("#correct").text("Correct Answers: " + correctAns);
        $("#incorrect").text("Incorrect Answers: " + incorrectAns);
        $("#unanswered").text("Unanswered: " + unanswered);
        stopGame();
    }

});