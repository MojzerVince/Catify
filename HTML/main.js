let selected = document.querySelector("#selected");
let bottom = document.querySelector(".bottom");

async function Generate(){
    const response = await fetch("https://catfact.ninja/fact?");
    const body = await response.json();

    let content = document.querySelector("#content");
    let firstIndex = JSON.stringify(body).indexOf(".")+1;
    if(firstIndex === -1 || firstIndex === 0){
        firstIndex = JSON.stringify(body).indexOf(",");
        firstIndex-=1;
        //console.log(firstIndex === -1)
    }
    content.textContent = JSON.stringify(body).substring(9, firstIndex);
    console.log(body);
    console.log(firstIndex);
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