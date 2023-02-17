let randomNum1 = Math.floor((Math.random() * 6) + 1);
let randomNum2 = Math.floor((Math.random() * 6) + 1);

let randomImg1 = "img/dice" + randomNum1 + ".png";
let randomImg2 = "img/dice" + randomNum2 + ".png";

let btn = document.querySelector("#btn");

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomNum1 > randomNum2) {
    document.getElementById("result").innerHTML = "Player 1 Wins!";
}

else if (randomNum1 < randomNum2) {
    document.getElementById("result").innerHTML = "Player 2 Wins!";
}

else {
    document.getElementById("result").innerHTML = "Draw!";
}

btn.addEventListener("click", function() {
    location.reload();
});