$(document).ready(function(){


    var currentScore=0;
    var winCount=0;
    var lossCount=0;
    var targetNumber=69;
    var counter=0;

    var randomNumber=Math.floor(Math.random()*targetNumber)+targetNumber;
    console.log (randomNumber);
    $("#radomNumber").text(randomNumber);
    

    var getRandom=function(min,max){
        return Math.floor(Math.random()*(max-min+1))+ min; 
    }

    $("#yourScore").html(yourScore);
    $("#targetNumber").html(targetNumber);

    function startGame(){
        var crystal1=0;
        var crystal2=0;
        var crystal3=0;
        var crystal4=0;

        
         console.log("crystal1: " +crystal1.value+ "| crystal2: " + crystal2.value + "|crystal3: "+crystal3.value + "|crystal4: "+crystal4.value);

         startGame();

        $("#crystals").click(function() {
            console.log(crystals);
            console.log(targetScore);
            

  
            $("#numberWins").text(wins);
            $("#numberLosses").text(losses);
            
            function reset() {
                random = Math.floor(Math.random()*102+19);
                console.log(random);
            $("#numberToGet").text(random);
            var crystal1 = Math.floor(Math.random()*12+1);
            var crystal2= Math.floor(Math.random()*12+1);
            var crystal3= Math.floor(Math.random()*12+1);
            var crystal4= Math.floor(Math.random()*12+1);
            userTotal = 0;
            $("#yourScore").text(userTotal);
        }
        
        function winner() {
            alert("You Won!!");
            wins++;
            $("#numberWins").text(wins);
            reset();
        
    }
        });
    };

 
})
