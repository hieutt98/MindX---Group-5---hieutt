let context = document.getElementById("description");
let str = "Click on button to change the background color";

context.innerHTML = str;

function changeColor(color) {
    document.body.style.background = color;
}
  
function btn_ChangeColor() {
    changeColor('red');
}         