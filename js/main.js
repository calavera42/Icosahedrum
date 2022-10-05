let symbols = "icosahedrum";
let fadeoutDelay = 1000;
let index = 0;

function Start() {
    setInterval(function(){
        document.getElementById('level').textContent = symbols[index];
        index++;
    }, fadeoutDelay / symbols.length);

    $("#mainContainer").fadeOut(fadeoutDelay, 'linear',function() {
        $("#mainContainer").load("./game.html", function(){
            $("#mainContainer").fadeIn(fadeoutDelay, 'linear');
        });
    });
}