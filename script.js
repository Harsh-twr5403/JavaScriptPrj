const button = document.getElementById('change-color');
const body = document.body;
button.addEventListener("click",function(){
    const randomColor = "#" + Math.floor(Math.random() * 16777215) .toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = randomColor;
});