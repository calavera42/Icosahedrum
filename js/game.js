
$(function(){
    LoadLevel("levels/início.txt");
})
function Answer() {
    let input = prompt("Código:");
    let level = `./levels/${input}.txt`;

    if(input == null){
        return;
    }
    
    LoadLevel(level);
}

function LoadLevel(url) {
    url += `?v=${Math.floor(Math.random() * 150)}`;
    var txtFile = new XMLHttpRequest();
    var allText = "Erro desconhecido.";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
            document.getElementById('reportViewer').innerHTML = allText;
        } else if(txtFile.readyState === XMLHttpRequest.DONE && txtFile.status !== 200)
        {
            alert("Resposta incorreta");
        }
    }
    txtFile.open("GET", url, true);
    txtFile.send(null);
}