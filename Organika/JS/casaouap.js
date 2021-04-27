function nCasa(){
    document.querySelector("#nCasa").style.display = "flex";
    document.querySelector("#nPredio").style.display = "none";
    document.querySelector("#nAp").style.display = "none";
}

function nAp(){
    document.querySelector("#nCasa").style.display = "none";
    document.querySelector("#nPredio").style.display = "flex";
    document.querySelector("#nAp").style.display = "flex";
}