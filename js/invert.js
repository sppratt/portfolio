
let inverted = document.getElementById("invert");

// let volume = document.getElementById("volume");
// video.style = video.classList.add("oldSchool");

// let body = document.querySelector("body");
// let nav = document.querySelector("nav");
// let nav_a = document.querySelector("nav a");
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
    // document.body.style = body.classList.add("inverted");
    // nav.style = nav.classList.add("inverted");
    // nav_a.style = nav_a.classList.add("inverted");
    // h1.style = h1.classList.add("inverted");
    // h2.style = h2.classList.add("inverted");

	document.body.style.backgroundColor = "red";
    document.querySelector("nav").style.backgroundColor = "#350047";
    document.querySelector("nav a").style.color = "lavender";
    document.querySelector("h1").style.color = "#e5bafb";
    document.querySelector("h2").style.color = "#e5bafb";


inverted.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    document.querySelector("nav").style.backgroundColor = "#350047";
    document.querySelector("nav a").style.color = "lavender";
    document.querySelector("h1").style.color = "#e5bafb";
    document.querySelector("h2").style.color = "#e5bafb";
});

