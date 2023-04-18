window.addEventListener("load", function () {
    let inverted = document.getElementById("invert");

    inverted.addEventListener("click", function() {
    document.body.style.backgroundColor = "#350047";
    document.querySelector("h1").style.color = "#e5bafb";
    document.querySelector("h2").style.color = "#e5bafb";
    // document.querySelector("nav").style.backgroundColor = "#350047";
    // document.getElementsByClassName("current")[0].style.color = "red";
    // for (var i = 0; i < 5; i++) {
    //     document.getElementsByClassName("link")[i].style.color = "#e5bafb";
    //     // document.querySelector("h1").style.color = "#e5bafb";
    // }
    for (var i = 0; i < 9; i++) {
        document.getElementsByClassName("text")[i].style.color = "#e5bafb";
    }
    
    
    });
});