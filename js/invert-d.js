window.addEventListener("load", function () {
    let inverted = document.getElementById("invert");

    inverted.addEventListener("click", function() {
    document.body.style.backgroundColor = "#000000";
    document.querySelector("h1").style.color = "#ffffff";
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("text")[i].style.color = "#000000";
        document.getElementsByClassName("text")[i].style.borderColor = "#ffffff";
        document.getElementsByClassName("text")[i].style.backgroundColor = "#ffffff";



        
    }
    
    
    
    });
});