var msg1 = document.getElementById("text1");
var msg2 = document.getElementById("text2");
var msg3 = document.getElementById("text3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function play(){
    var _guess = document.getElementById("guess").value;
    if(player_guess < 1 || player_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guessed_nums.push(player_guess);
        no_of_guesses+= 1;

        if(player_guess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
        }
        else if(player_guess > answer){
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
        }
        else if(player_guess == answer){
            msg1.textContent = "Congrats You Win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in "+ no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        if (score > highscore) {
            highscore = score;
        }
    }
    }
}
