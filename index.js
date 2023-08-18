function randomNumber1(){
    var number1 = Math.random()*5;
    number1 = Math.round(number1) + 1;
    if(number1 ===1 ){
        document.getElementById("dice-1").setAttribute("src","./images/1.png");
    }
    if(number1 ===2 ){
        document.getElementById("dice-1").setAttribute("src","./images/2.png");
    }
    if(number1 ===3 ){
        document.getElementById("dice-1").setAttribute("src","./images/3.png");
    }
    if(number1 ===4 ){
        document.getElementById("dice-1").setAttribute("src","./images/4.png");
    }
    if(number1 ===5 ){
        document.getElementById("dice-1").setAttribute("src","./images/5.png");
    }
    if(number1 ===6 ){
        document.getElementById("dice-1").setAttribute("src","./images/6.png");
    }
    return number1
}
function randomNumber2(){
    var number2 = Math.random()*5;
    number2 = Math.round(number2) + 1;
    if(number2 ===1 ){
        document.getElementById("dice-2").setAttribute("src","./images/1.png");
    }
    if(number2 ===2 ){
        document.getElementById("dice-2").setAttribute("src","./images/2.png");
    }
    if(number2 ===3 ){
        document.getElementById("dice-2").setAttribute("src","./images/3.png");
    }
    if(number2 ===4 ){
        document.getElementById("dice-2").setAttribute("src","./images/4.png");
    }
    if(number2 ===5 ){
        document.getElementById("dice-2").setAttribute("src","./images/5.png");
    }
    if(number2 ===6 ){
        document.getElementById("dice-2").setAttribute("src","./images/6.png");
    }
    return number2
}

function rollDice(number1 , number2){
    var num1 = randomNumber1();
    var num2 = randomNumber2();
    if(num1 > num2){
        document.getElementById("heading").innerHTML = 'Player 1 wins';
    }
    if(num1 < num2){
        document.getElementById("heading").innerHTML ="Player 2 Wins";
    }   
    if(num1 == num2){
        document.getElementById("heading").innerHTML = "Draw";
    }
}