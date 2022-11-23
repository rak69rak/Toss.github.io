var randomNumber=Math.floor(Math.random()*2)+1;
var randomSource="coin"+randomNumber+".png";
var randomCoin=document.querySelector("img");
randomCoin.setAttribute("src",randomSource);


if (randomNumber===1){
  document.querySelector("h2").textContent="Tails";
}
if (randomNumber===2){
  document.querySelector("h2").textContent="Heads";
}
