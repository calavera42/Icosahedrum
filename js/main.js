let symbols = "icosahedrum";
let fadeoutDelay = 1000;
let index = 0;

function Start() {
    setInterval(function(){
        document.getElementById('level').textContent = symbols[index];
        index++;
    }, fadeoutDelay / symbols.length);

    $("body").fadeOut(fadeoutDelay, function() {
        $("body").load("game.html");
        //$("html").fadeIn(fadeoutDelay);
    });
}