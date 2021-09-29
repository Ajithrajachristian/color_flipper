const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn3 = document.getElementById("btn1");
const press = document.getElementById("colors");

btn3.addEventListener('click' , function() {
    let hexColor = '#';
    for(let i = 0; i<6; i++) {
        hexColor += hex[getRandomNumber()]
    }
        colors.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;


})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}
