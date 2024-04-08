var randomNumber1 = Math.floor((Math.random() * 6)+1);        //Creating ransom number btw 1 & 6.
var randomDiceImage = "dice" + randomNumber1 + ".png";        //Selecting the image from the number to create random images
var randomImageSource = "images/" + randomDiceImage;            // Alternate image source to replace the original image
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor((Math.random() * 6)+1);        //Creating ransom number btw 1 & 6.
var randomDiceImage2 = "dice" + randomNumber2 + ".png";        //Selecting the image from the number to create random images
var randomImageSource2 = "images/" + randomDiceImage2;            // Alternate image source to replace the original image
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// win, lost and draw
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins, Player 2 lost";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent="Player 2 wins, Player 1 lost"; 
}
else{
    document.querySelector("h1").textContent="There is a draw";
}