function yes() {
    
}

function buttonNo() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    document.getElementById("button_no").style.left = x + "px";
    document.getElementById("button_no").style.top = y + "px";
}

