var ranNum1 = Math.floor((Math.random() * 6) + 1);
var ranNum2 = Math.floor((Math.random() * 6) + 1);

var ranDiceImage1 = "dice" + ranNum1 + ".png";
var ranDiceImage2 = "dice" + ranNum2 + ".png";

var ranDiceImageSource1 = "images/" + ranDiceImage1;
var ranDiceImageSource2 = "images/" + ranDiceImage2;

document.querySelectorAll('img')[0].setAttribute("src", ranDiceImageSource1);
document.querySelectorAll('img')[1].setAttribute("src", ranDiceImageSource2);

if(ranNum1 > ranNum2){
  document.querySelector('h1').innerHTML = "🎉Player1 Wins!";
}
else if (ranNum1 < ranNum2){
  document.querySelector('h1').innerHTML = "Player2 Wins! 🎉";
}
else{
  document.querySelector('h1').innerHTML = "🏳️ Tie! 🏳️ ";
}
