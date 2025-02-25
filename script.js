function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// Toggle navigation menu on small screens
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function startCountdown(targetDate) {
    console.log("Countdown Started!"); // Debugging

    const countdownElement = document.getElementById("countdown-timer");
    if (!countdownElement) {
        console.log("Error: Countdown element not found!");
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const eventDate = new Date(targetDate).getTime();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "The event has started!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Initialize countdown
startCountdown("January 14, 2025 00:00:00");