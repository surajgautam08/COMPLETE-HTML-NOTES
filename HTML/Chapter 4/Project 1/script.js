const slider = document.querySelector(".food-slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".food-card");

// Next button event
nextBtn.addEventListener("click", function () {
    slider.scrollBy({
        left: 280,
        behavior: "smooth"
    });
});

// Previous button event
prevBtn.addEventListener("click", function () {
    slider.scrollBy({
        left: -280,
        behavior: "smooth"
    });
});

// Search event
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const cardName = card.querySelector("h3").textContent.toLowerCase();

        if (cardName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Card click event and animation
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.add("clicked");

        setTimeout(function () {
            card.classList.remove("clicked");
        }, 400);

        const foodName = card.querySelector("h3").textContent;

        alert("You selected: " + foodName);
    });
});