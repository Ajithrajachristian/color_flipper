const color = ["Blue" , "red" , "Green" , "Yellow"];

const shade = document.getElementById("colors");
const press = document.getElementById("btn1");

press.addEventListener('click' , function(){
   let randomColor = getRandomColor();
   document.body.style.backgroundColor = color[randomColor];
   colors.textContent = color[randomColor];
})

const getRandomColor = () => {
    return Math.floor(Math.random()*color.length);
}