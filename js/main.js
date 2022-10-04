let symbols = "icosahedrum";
let fadeoutDelay = 1000;
let index = 0;

function Start() {
    setInterval(function(){
        document.getElementById('level').textContent = symbols[index];
        index++;
    }, fadeoutDelay / symbols.length);

    $("html").fadeOut(fadeoutDelay, 'linear',function() {
        $("html").load("./game.html", function(){
            $("html").fadeIn(fadeoutDelay);
        });
    });
}