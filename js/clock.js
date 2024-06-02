const clock = document.querySelector("h2");

function getClock() {
    const date = new Date();

    const hours = `${date.getHours()}`.padStart(2, "0");
    const minuites = `${date.getMinutes()}`.padStart(2, "0");
    const seconds = `${date.getSeconds()}`.padStart(2, "0");

    clock.innerText = `${hours}:${minuites}:${seconds}`;
}

setInterval(getClock, 1000);