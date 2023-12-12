window.addEventListener("load", function () {
    let inverted = document.getElementById("invert");

    function handleInvert() {
        // Toggle the 'inverted' class on the body
        document.body.classList.toggle('inverted');

        // Check if the body has the 'inverted' class
        let isBodyInverted = document.body.classList.contains('inverted');

        // Apply or revert colors based on the 'inverted' class
        if (isBodyInverted) {
            // Apply inverted colors
            document.body.style.backgroundColor = "#000000";
            document.querySelector("h1").style.color = "#ffffff";
            document.querySelector("h2").style.color = "#ffffff";
            document.querySelector("h3").style.color = "#ffffff";

            // Change the color of nav links individually
            let navLinks = document.querySelectorAll("nav a");
            navLinks.forEach(function (link) {
                link.style.color = "#ffffff";
                link.style.textShadow = "2px 2px 5px rgba(255, 255, 255, 0.3)";
            });

            // Change the color of elements with specific classes
            let title = document.querySelector(".title");
            if (title) {
                title.style.color = "#ffffff";
            }

            let left = document.querySelector(".left");
            if (left) {
                left.style.color = "#ffffff";
            }

            let rightText = document.querySelectorAll(".right h3");
            rightText.forEach(function (text) {
                text.style.color = "#ffffff";
            });

            let rightLinks = document.querySelectorAll(".right a.connect");
            rightLinks.forEach(function (link) {
                link.style.color = "#ffffff";
            });

            let hrLines = document.querySelectorAll("hr");
            hrLines.forEach(function (hr) {
                hr.style.borderTop = "1px solid #ffffff";
            });

            // Change the color of all h1 elements to white
            let h1Elements = document.querySelectorAll("h1");
            h1Elements.forEach(function (h1) {
                h1.style.color = "#ffffff";
            });

            inverted.style.backgroundColor = "#000000";
            inverted.style.color = "#ffffff";
            inverted.style.border = "1px solid #ffffff";

            // Update the text around the button
            let buttonText = "☀⋆⁺₊⋆<br>built from scratch with lots of love and coffee <3";
            let footerText = document.querySelector(".left h3");
            if (footerText) {
                footerText.innerHTML = `⋆⁺₊⋆<button id="invert" class="button">invert colors</button>${buttonText}`;
            }

            let drawingImage = document.querySelector("img[src='images/drawing.jpeg']");
            if (drawingImage) {
                drawingImage.src = "images/inverted_drawing.jpg";
            }

            let arrowIcon = document.querySelector("img[src='images/arrow.png']");
            if (arrowIcon) {
                arrowIcon.src = "images/arrow_inverted.png";
            }

            let noaaImage = document.querySelector("img[src='images/noaa_white.png']");
            if (noaaImage) {
                noaaImage.src = "images/noaa_black.png";
            }
            let projectTexth1 = document.querySelector(".project-text h1");
            if (projectTexth1) {
                projectTexth1.style.color = "#ffffff";
            }
            let projectTexth2 = document.querySelector(".project-text h2");
            if (projectTexth2) {
                projectTexth2.style.color = "#ffffff";
            }
        } else {
            // Revert to original colors
            document.body.style.backgroundColor = "";
            document.querySelector("h1").style.color = "";
            document.querySelector("h2").style.color = "";
            document.querySelector("h3").style.color = "";

            // Change the color of nav links individually
            let navLinks = document.querySelectorAll("nav a");
            navLinks.forEach(function (link) {
                link.style.color = "";
                link.style.textShadow = "";
            });

            // Change the color of elements with specific classes
            let title = document.querySelector(".title");
            if (title) {
                title.style.color = "";
            }

            let left = document.querySelector(".left");
            if (left) {
                left.style.color = "";
            }

            let rightText = document.querySelectorAll(".right h3");
            rightText.forEach(function (text) {
                text.style.color = "";
            });

            let rightLinks = document.querySelectorAll(".right a.connect");
            rightLinks.forEach(function (link) {
                link.style.color = "";
            });

            let hrLines = document.querySelectorAll("hr");
            hrLines.forEach(function (hr) {
                hr.style.borderTop = "";
            });

            // Change the color of all h1 elements to default
            let h1Elements = document.querySelectorAll("h1");
            h1Elements.forEach(function (h1) {
                h1.style.color = "";
            });

            inverted.style.backgroundColor = "";
            inverted.style.color = "";
            inverted.style.border = "";

            // Update the text around the button
            let buttonText = "☾⋆⁺₊⋆ | built from scratch with lots of love and coffee <3";
            let footerText = document.querySelector(".left h3");
            if (footerText) {
                footerText.innerHTML = `⋆⁺₊⋆<button id="invert" class="button">invert colors</button>${buttonText}`;
            }

            let drawingImage = document.querySelector("img[src='images/inverted_drawing.jpg']");
            if (drawingImage) {
                drawingImage.src = "images/drawing.jpeg";
            }

            let arrowIcon = document.querySelector("img[src='images/arrow_inverted.png']");
            if (arrowIcon) {
                arrowIcon.src = "images/arrow.png";
            }

            let noaaImage = document.querySelector("img[src='images/noaa_black.png']");
            if (noaaImage) {
                noaaImage.src = "images/noaa_white.png";
            }
            let projectTexth1 = document.querySelector(".project-text h1");
            if (projectTexth1) {
                projectTexth1.style.color = "";
            }
            let projectTexth2 = document.querySelector(".project-text h2");
            if (projectTexth2) {
                projectTexth2.style.color = "";
            }
        }
    }

    // Attach the event listener
    inverted.addEventListener("click", handleInvert);

    // Optionally, you can add the following to remove the event listener when the button is not needed anymore (e.g., when the page unloads)
    window.addEventListener("beforeunload", function () {
        inverted.removeEventListener("click", handleInvert);
    });
});
