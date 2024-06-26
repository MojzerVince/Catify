let selected = document.querySelector("#selected");
let bottom = document.querySelector(".bottom");

async function Generate(){
    const response = await fetch("https://catfact.ninja/fact?max_length=370");
    const body = await response.json();

    let content = document.querySelector("#content");
    //let firstIndex = JSON.stringify(body).indexOf(".")+1;
    let lastIndex = JSON.stringify(body).lastIndexOf("l")-3;
    content.textContent = JSON.stringify(body).substring(9, lastIndex);
    console.log(body);
    console.log(lastIndex);
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