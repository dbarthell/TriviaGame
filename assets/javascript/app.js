var count = 25;
var intervalId;
var correctAns = 0;
var incorrectAns = 0;
var unanswered = 0;
var answers = []

$(document).ready(function () {

    $("#start").on("click", startGame);
    $("#reset").on("click", resetGame);
    $("#scoreboard").hide();
    $("#submit").on("click", displayScore);

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
    $("input[id=Tom]").on("click", function () {
        correctAns++;
    });
    $("input[class=wrong]").on("click", function () {
        incorrectAns++;
    });


    function startGame() {
        intervalId = setInterval(decrement, 1000);
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