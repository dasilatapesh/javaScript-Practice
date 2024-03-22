const input = document.getElementById("myInput");
const handleKeyPress = (event) => {
    document
    .querySelector(".keyPressed").textContent = `Key Pressed: ${event.key}`;
    document
    .querySelector(".keyCode").textContent = `Key Code: ${event.code}`;
    document
    .querySelector(".charCode").textContent = `Char Code: ${event.key.charCodeAt(0)}`;
    document
    .querySelector(".eventType").textContent = `Event Type: ${event.type}`;
};
input.addEventListener('keydown',handleKeyPress);