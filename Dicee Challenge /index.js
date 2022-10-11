//player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice"+randomNumber1+".png" //dice1.png-dice6.png

var randomImageSource = "images/"+randomDiceImage; //images/dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0];//selecting player 1 img

 image1.setAttribute("src",randomImageSource);


// player 2

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1]; //selecting player 2 img
image2.setAttribute("src",randomImageSource2);

//win score
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else
{
     document.querySelector("h1").innerHTML="Match is Drawn!!";
}