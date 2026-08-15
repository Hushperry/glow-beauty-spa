const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Thank you for choosing Glow Beauty & Spa! We will contact you soon.");
    });
});
