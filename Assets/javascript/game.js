$(document).ready(function(){


    var yourScore=0;
    var winCount=0;
    var lossCount=0;
    var targetNumber=69;
    var counter=0;
    var crystal1RandomNumber = Math.floor(Math.random()*12+1);
    var crystal2RandomNumber = Math.floor(Math.random()*12+1);
    var crystal3RandomNumber = Math.floor(Math.random()*12+1);
    var crystal4RandomNumber = Math.floor(Math.random()*12+1);

    var randomNumber=Math.floor(Math.random()*targetNumber)+targetNumber;
    console.log (randomNumber);
    $("#radomNumber").text(randomNumber);
    
    $('.crystal1').on('click',function(){
       yourScore=yourScore+crystal1RandomNumber
        $("#yourScore").html(yourScore);
    }); if (yourScore==targetNumber){
        win++;
    } 
    
    $('.crystal2').on('click',function(){
        yourScore=yourScore+crystal2RandomNumber
         $("#yourScore").html(yourScore);
     }); if (yourScore==targetNumber){
        win++;
    } 


     $('.crystal3').on('click',function(){
        yourScore=yourScore+crystal3RandomNumber
         $("#yourScore").html(yourScore);
     });if (yourScore==targetNumber){
        win++;
    } 

     $('.crystal4').on('click',function(){
        yourScore=yourScore+crystal4RandomNumber
         $("#yourScore").html(yourScore);
     });if (yourScore==targetNumber){
        win++;
    } 
    
    $("#targetNumber").html(randomNumber);
        
 
})
