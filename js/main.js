let symbols = "abcdefghijklmnopqrstuvwxyz?!@#$%&*";

function Start() {
    setInterval(function(){
        document.getElementById('level').textContent = symbols[Math.round(Math.random() * symbols.length)];
    }, 50);

    $("body").fadeOut(500, function() {
        window.location = "./game.html";
    });
}