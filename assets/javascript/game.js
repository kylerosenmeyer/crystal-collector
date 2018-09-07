//Game Instructions
//Player is given random number, and selects from 4 crystals each with a hidden random number to match the number given.
//Clicking a crystal adds to the players score.
//If the player's score exceeds the random number, the player loses. If the player's score matches the random number, the player wins.//#endregion

//This game is an object called cC for quick shorthand (Crystal Collector)

var cC = {
    wins: 0,
    losses: 0,
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
    score: 0,
    gameNumber: 0,
    gameOver: false,

    //This array will be used for rotating the gems later
    position: [0,0,0,0],
    
    newGameNumber: function() {

        //Generate the random gameNumber and update the page.

        this.gameNumber = Math.floor(Math.random() * 101) + 19;
        $("#currentGoal").text("Goal: " + this.gameNumber);
    
    },

    setup: function() {

        this.newGameNumber();
        $("#currentWins").text("Wins: ") + this.wins;
        $("#currentLosses").text("Losses: ") + this.losses;
        $("#currentScore").text("Current Score: ") + this.score;
        this.crystalNumbers();

    },

    crystalNumbers: function() {

        // These are the numbers assigned to the Crystals

        this.crystal1 = Math.floor(Math.random() * 11) +1;
        this.crystal2 = Math.floor(Math.random() * 11) +1;
        this.crystal3 = Math.floor(Math.random() * 11) +1;
        this.crystal4 = Math.floor(Math.random() * 11) +1;

        //Console logs for Crystals: FOR CHEATING!

        console.log("Crystal 1 = " + this.crystal1);
        console.log("Crystal 2 = " + this.crystal2);
        console.log("Crystal 3 = " + this.crystal3);
        console.log("Crystal 4 = " + this.crystal4);
        console.log("---------");
    },

    gameLogic: function() {

        //Logic for Winning or Losing the game. The statement checks two conditions and exectues a game refresh if either are true.

        if ( this.score === this.gameNumber ) {

            this.gameOver = true;
            this.rotationReset();
            this.wins = this.wins + 1;
            $("#currentWins").text("Wins: " + this.wins);
            this.newGameNumber();
            this.crystalNumbers();
            this.score = 0;
            

        } else if ( this.score >= this.gameNumber ) {

            this.gameOver = true;
            this.rotationReset();
            this.losses = this.losses + 1;
            $("#currentLosses").text("Losses: " + this.losses);
            this.newGameNumber();
            this.crystalNumbers();
            this.score = 0;
        }
    },

    // Actions for clicking one of the crystals

    c1: function() {
        this.gameOver = false;
        this.score = this.score + this.crystal1;
        this.gameLogic();
        $("#currentScore").text("Your Score is: " + this.score);

        //This is the portion of code that rotates the gem on click. This will always execute unless the gameLogic intervenes and sets gameOver to true.
        if ( this.gameOver == false ) {
            if ( $("#gem1").hasClass("gem0") == true ) {
                $("#gem1").removeClass("gem0").addClass("gem90");
            } else if ( $("#gem1").hasClass("gem90") == true ) {
                $("#gem1").removeClass("gem90").addClass("gem180");
            } else if ( $("#gem1").hasClass("gem180") == true ) {
                $("#gem1").removeClass("gem180").addClass("gem270");
            } else if ( $("#gem1").hasClass("gem270") == true ) {
                $("#gem1").removeClass("gem270").addClass("gem0");
            }
        }
    },

    c2: function() {
        this.gameOver = false;
        this.score = this.score + this.crystal2;
        this.gameLogic();
        $("#currentScore").text("Your Score is: " + this.score);
        
        //This is the portion of code that rotates the gem on click. This will always execute unless the gameLogic intervenes and sets gameOver to true.
        if ( this.gameOver == false ) {
            if ( $("#gem2").hasClass("gem0") == true ) {
                $("#gem2").removeClass("gem0").addClass("gem90");
            } else if ( $("#gem2").hasClass("gem90") == true ) {
                $("#gem2").removeClass("gem90").addClass("gem180");
            } else if ( $("#gem2").hasClass("gem180") == true ) {
                $("#gem2").removeClass("gem180").addClass("gem270");
            } else if ( $("#gem2").hasClass("gem270") == true ) {
                $("#gem2").removeClass("gem270").addClass("gem0");
            }
        }
    },

    c3: function() {
        this.gameOver = false;
        this.score = this.score + this.crystal3;
        this.gameLogic();
        $("#currentScore").text("Your Score is: " + this.score);

        //This is the portion of code that rotates the gem on click. This will always execute unless the gameLogic intervenes and sets gameOver to true.
        if ( this.gameOver == false ) {
            if ( $("#gem3").hasClass("gem0") == true ) {
                $("#gem3").removeClass("gem0").addClass("gem90");
            } else if ( $("#gem3").hasClass("gem90") == true ) {
                $("#gem3").removeClass("gem90").addClass("gem180");
            } else if ( $("#gem3").hasClass("gem180") == true ) {
                $("#gem3").removeClass("gem180").addClass("gem270");
            } else if ( $("#gem3").hasClass("gem270") == true ) {
                $("#gem3").removeClass("gem270").addClass("gem0");
            }
        }
    },

    c4: function() {
        this.gameOver = false;
        this.score = this.score + this.crystal4;
        this.gameLogic();
        $("#currentScore").text("Your Score is: " + this.score);

        //This is the portion of code that rotates the gem on click. This will always execute unless the gameLogic intervenes and sets gameOver to true.
        if ( this.gameOver == false ) {
            if ( $("#gem4").hasClass("gem0") == true ) {
                $("#gem4").removeClass("gem0").addClass("gem90");
            } else if ( $("#gem4").hasClass("gem90") == true ) {
                $("#gem4").removeClass("gem90").addClass("gem180");
            } else if ( $("#gem4").hasClass("gem180") == true ) {
                $("#gem4").removeClass("gem180").addClass("gem270");
            } else if ( $("#gem4").hasClass("gem270") == true ) {
                $("#gem4").removeClass("gem270").addClass("gem0");
            }
        }
    },

    //Rotation Reset
    rotationReset: function() {
        if ( $("#gem1").hasClass("gem0") == false ) {
            $("#gem1").removeClass("gem90 gem180 gem270").addClass("gem0");
        } else { $("#gem1").removeClass("gem90").addClass("gem0") };

        if ( $("#gem2").hasClass("gem0") == false ) {
            $("#gem2").removeClass("gem90 gem180 gem270").addClass("gem0");
        } else { $("#gem2").removeClass("gem90").addClass("gem0") };

        if ( $("#gem3").hasClass("gem0") == false ) {
            $("#gem3").removeClass("gem90 gem180 gem270").addClass("gem0");
        } else { $("#gem3").removeClass("gem90").addClass("gem0") };

        if ( $("#gem4").hasClass("gem0") == false ) {
            $("#gem4").removeClass("gem90 gem180 gem270").addClass("gem0");
        } else { $("#gem4").removeClass("gem90").addClass("gem0") };
    },

};


//On Document Load, generate the Goal number and the random numbers for the crystals.

$(document).ready( function() {

    cC.setup();

});

//On Crystal Click events, add the value of the appropriate Crystal to the Score.

$("#gem1").click(function() {

    cC.c1();
    
});

$("#gem2").click(function() {

    cC.c2();

});

$("#gem3").click(function() {

    cC.c3();
    
});

$("#gem4").click(function() {

    cC.c4();
    
});

