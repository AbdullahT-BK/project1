var answer = Math.floor(Math.random()*100) + 1;
console.log(answer);
var no_of_guesses = 0;
var guessed_nums = [];

var check = document.querySelector(".btn");
console.log(check);
var reset =document.querySelector(".reset");
var guess =Number(document.querySelector(".guess").value);
console.log(guess);
var msg1 = document.querySelector(".msg");

check.addEventListener ('click', function(){

    if (guess < 1 || guess > 100){
        alert("Please enter a number between 1 and 100.");
        msg1.textContent = "Your number is out of range";
    }
    // else{
    //     guessed_nums.push(guess);
    //     no_of_guesses+= 1;

    //     if(guess.value < answer){
    //         msg1.textContent = "Your guess is too low.";
    //         msg2.textContent = "No. of guesses: " + no_of_guesses;
    //         msg3.textContent = "Guessed numbers are: " +
    //         guessed_nums;
    //     }
    //     else if(guess.value > answer){
    //         msg1.textContent = "Your guess is too high.";
    //         msg2.textContent = "No. of guesses: " + no_of_guesses;
    //         msg3.textContent = "Guessed numbers are: " +
    //         guessed_nums;
    //     }
    //     else if(guess.value == answer){
    //         msg1.textContent = "Congrats You Win!!";
    //         msg2.textContent = "The number was: " + answer;
    //         document.getElementById("my_btn").disabled = true;
    //     if (score > highscore) {
    //         highscore = score;
    //     }
    }

)
