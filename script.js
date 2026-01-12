function otevritProjektor(src){
    document.getElementById("projektor").style.display = "flex";
    
    document.getElementById("projektorImg").src = src;
}
function zavritProjektor(){
    document.getElementById("projektor").style.display = "none";
}

var dubany = false;
function otevritDubany(){
    dubany = !dubany;
    if(dubany == false){
        document.getElementById("dubanyFotky").style.display = "none";
    }
    if(dubany == true){
        document.getElementById("dubanyFotky").style.display = "flex";
    }
}
