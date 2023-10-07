document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const randomNumberDisplay = document.getElementById("randomNumber");

    generateBtn.addEventListener("click", function () {
        // Generate a random number between 1 and 20
        const randomNum = Math.floor(Math.random() * 20) + 1;

        // Display the random number
        randomNumberDisplay.textContent = `carbon Footprint: ${randomNum}/20`;
    });
});
