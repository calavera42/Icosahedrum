let symbols = "icosahedrum";
let fadeoutDelay = 500;
let index = 0;

function Start() {
    setInterval(function(){
        document.getElementById('level').textContent = symbols[index];
        index++;
    }, fadeoutDelay / symbols.length);

    $("body").fadeOut(fadeoutDelay, function() {
        window.location = "./game.html";
    });
}