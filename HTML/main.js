let selected = document.querySelector("#selected");
let bottom = document.querySelector(".bottom");

function Generate(){
    let content = document.querySelector("#content");
    content.textContent = "G to the G mikiegér";
}

function CatFacts(){
    selected.textContent = "Cat Facts";
    Close();
}
function CatImages(){
    selected.textContent = "Cat Images";
    Close();
}
let options_img = document.querySelector(".options");
function Options(){
    bottom.style = "display: grid;";
    options_img.style = "filter: brightness(75%);";
}
function Close(){
    bottom.style = "display: none;";
    options_img.style = "filter: brightness(100%);";
}