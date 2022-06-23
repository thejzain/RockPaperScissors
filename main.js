var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

rock.addEventListener("click", function(){
   //console.log(getRandomInt(3));
   if(getRandomInt(3)==0){
    console.log("Rock Draw")
   } else if (getRandomInt(3)==1) {
    console.log("Paper , Lose")
   } else if (getRandomInt(3)==2){
    console.log("Scissors ,Win")
   }
})
paper.addEventListener("click", function(){
    //console.log(getRandomInt(3));
    if(getRandomInt(3)==0){
        console.log("Rock ,Win")
       } else if (getRandomInt(3)==1) {
        console.log("Paper ,Draw")
       } else if (getRandomInt(3)==2){
        console.log("Scissors ,Lose")
       }
})
scissors.addEventListener("click", function(){
    //console.log(getRandomInt(3));
    if(getRandomInt(3)==0){
        console.log("Rock ,Lose")
       } else if (getRandomInt(3)==1) {
        console.log("Paper ,Lose")
       } else if (getRandomInt(3)==2){
        console.log("Scissors ,Draw")
       }
})

