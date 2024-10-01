document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector("#image");
    const question1 = document.getElementById("question1");
    const noPlant = document.getElementById("no_plant");
    const question2 = document.getElementById("question2");
    const noWater = document.getElementById("no_water");
    const question3 = document.getElementById("question3");
    const noSun = document.getElementById("no_sun");
    const question4 = document.getElementById("question4");
    const noCommunicate = document.getElementById("no_communicate");

    function fadeOut(element) {
        element.style.opacity = 0;
        setTimeout(() => {
            element.classList.add("hidden");
            element.style.opacity = 1; // Reset opacity for when it shows up again
        }, 500);
    }

    function resetQuestionsToQuestion2() {
        // Hide all questions and show Question 2
        fadeOut(noPlant);
        fadeOut(noWater);
        fadeOut(noSun);
        fadeOut(noCommunicate);
        fadeOut(question1);  // We no longer start from Question 1
        fadeOut(question3);
        fadeOut(question4);
        
        // Show Question 2 to start from the second question
        setTimeout(() => {
            question2.classList.remove("hidden");
            image.src = "images/img-3.gif"; // Optionally reset to an appropriate image
        }, 600);  // Delay to give time for the fade-out animation to complete
    }

    // First question
    document.querySelector("#yes").addEventListener("click", function() {
        fadeOut(question1);
        question2.classList.remove("hidden");
        image.src = "images/img-1.gif"; // Image for planting seeds
    });

    document.querySelector("#no").addEventListener("click", function() {
        fadeOut(question1);
        noPlant.classList.remove("hidden");
        image.src = "images/img-0.gif";
    });

    // Follow-up for no to planting
    document.querySelector("#no_time").addEventListener("click", function() {
        fadeOut(noPlant);
        question2.classList.remove("hidden");
        image.src = "images/img-0.gif";
    });

    document.querySelector("#no_fear").addEventListener("click", function() {
        fadeOut(noPlant);
        question2.classList.remove("hidden");
        image.src = "images/img-0.gif";
    });

    // Second question
    document.querySelector("#water_yes").addEventListener("click", function() {
        fadeOut(question2);
        question3.classList.remove("hidden");
        image.src = "images/img-3.gif"; // Image for watering yes
    });

    document.querySelector("#water_no").addEventListener("click", function() {
        fadeOut(question2);
        noWater.classList.remove("hidden");
        image.src = "images/img-5.gif";
    });

    // Follow-up for no to watering
    document.querySelector("#water_time").addEventListener("click", function() {
        fadeOut(noWater);
        question3.classList.remove("hidden");
        image.src = "images/img-5.gif";
    });

    document.querySelector("#water_knowledge").addEventListener("click", function() {
        fadeOut(noWater);
        question3.classList.remove("hidden");
        image.src = "images/img-5.gif";
    });

    // Third question
    document.querySelector("#sun_yes").addEventListener("click", function() {
        fadeOut(question3);
        question4.classList.remove("hidden");
        image.src = "images/img-4.gif"; // Image for sunlight yes
    });

    document.querySelector("#sun_no").addEventListener("click", function() {
        fadeOut(question3);
        noSun.classList.remove("hidden");
        image.src = "images/img-6.gif";
    });

    // Follow-up for no to sunlight
    document.querySelector("#sun_not_needed").addEventListener("click", function() {
        fadeOut(noSun);
        question4.classList.remove("hidden");
        image.src = "images/img-6.gif";
    });

    document.querySelector("#sun_too_much").addEventListener("click", function() {
        fadeOut(noSun);
        question4.classList.remove("hidden");
        image.src = "images/img-6.gif";
    });

    // Fourth question
    document.querySelector("#comm_yes").addEventListener("click", function() {
        fadeOut(question4);
        image.src = "images/img-2.gif"; // Image for communication yes
        setTimeout(resetQuestionsToQuestion2, 3000); // Reset the questions after 3 seconds, but start from Question 2
    });

    document.querySelector("#comm_no").addEventListener("click", function() {
        fadeOut(question4);
        noCommunicate.classList.remove("hidden");
        image.src = "images/img-0.gif";
    });

    // Follow-up for no to communication
    document.querySelector("#comm_fine_alone").addEventListener("click", function() {
        fadeOut(noCommunicate);
        setTimeout(resetQuestionsToQuestion2, 3000); // Reset the questions after 3 seconds
    });

    document.querySelector("#comm_no_time").addEventListener("click", function() {
        fadeOut(noCommunicate);
        setTimeout(resetQuestionsToQuestion2, 3000); // Reset the questions after 3 seconds
    });
});
