window.addEventListener("load", function () {
    let inverted = document.getElementById("invert");

    inverted.addEventListener("click", function() {
    document.body.style.backgroundColor = "#350047";
    document.querySelector("h1").style.color = "#e5bafb";
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("text")[i].style.color = "#350047";
        document.getElementsByClassName("text")[i].style.borderColor = "lavender";
        document.getElementsByClassName("text")[i].style.backgroundColor = "lavender";



        
    }
    
    
    
    });
});