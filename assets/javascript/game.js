
var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

var computerChoice = abc[Math.floor((Math.random() *2) * abc.length)];


var wins = 0;
var losses = 0;
var guess = 0;
var sofar = 9; 


document.onkeypress = function(event) {
var userGuess = event.key;
    if(userGuess){guess++;}
    if(userGuess === computerChoice){
        wins++;
    }
    else{
        sofar--;
    }

    if( guess){
        losses++;
    }
        //make an empty array
        var emptyarray = [];
        //get 'sofar' results to go into empty array 
        emptyarray.push(userGuess);
        
        //print into array

    document.getElementById('sofar').innerText  = "Your guesses so far: "+ emptyarray;
    

   //this logs the wins
    document.getElementById('wins').innerHTML = "Wins: " + wins;
       //if the user loses with 0 wins this is displayed in the wins section
        if(sofar<=0){
            if(wins===0){document.getElementById('wins').innerHTML = "Wins: " + "DAMN, you lost with " + 0 +" wins </3";

            };
            
    }
        //if the user users tries go to zero it stops counting and displays this messaage
        if(sofar<=0){
            document.getElementById('wins').innerHTML = "Wins: " + "DAMN, you lost with " +wins +" wins </3";
        }
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guess').innerHTML = "Guesses left: " + sofar;
        if(sofar<=0){
        document.getElementById('guess').innerHTML = "Guesses left: YOU SUCK, YOU LOST";
    }
    
    

}



