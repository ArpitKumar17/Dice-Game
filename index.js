var randomImg= Math.floor(Math.random()*6)+1;
var randomImageSource= "images"+ "/dice"+randomImg+".png";
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource);

var randomImage2= Math.floor(Math.random()*6)+1;
var randomImageSource2="images"+"/dice"+randomImage2+".png";
var Image2= document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImageSource2);

if(randomImg>randomImage2){
    document.querySelector("h1").innerHTML="Player1 Wins !😎"
}
if(randomImg<randomImage2){
    document.querySelector("h1").innerHTML="Player2 Wins!😎"
}
if(randomImage2===randomImg){
    document.querySelector("h1").innerHTML="Draw😉"

}