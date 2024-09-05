window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector(".car-img");
    const heading = document.querySelector(".hero-head");

    // Add an event listener for the car's animation end
    car.addEventListener("animationend", () => {
        // Show the heading after the car has passed
        heading.style.visibility = "visible";
    });
});
  