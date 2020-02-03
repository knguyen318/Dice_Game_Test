//
var n1 = Math.floor(Math.random() * 6 + 1);
var n2 = Math.floor(Math.random() * 6 + 1);
//Player1
if (n1 === 1) {
   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (n1 === 2) {
   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (n1 === 3) {
   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (n1 === 4) {
   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (n1 === 5) {
   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}
//Player2
if (n2 === 1) {
   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (n2 === 2) {
   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (n2 === 3) {
   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (n2 === 4) {
   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (n2 === 5) {
   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {
   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

// change the title
if(n1 > n2) {
   document.querySelector("h1").innerHTML = "Player 1 Wins !!!"
} else if (n1 < n2) {
   document.querySelector("h1").innerHTML = "Player 2 Wins !!!"
} else {
   document.querySelector("h1").innerHTML = "Draws !!!"
}
