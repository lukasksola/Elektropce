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

        document.getElementById("fotkyDubOtevrit").style.backgroundColor = "#f7c073";
        document.getElementById("fotkyDubOtevrit").style.transform = "scale(1)";
    }
    if(dubany == true){
        document.getElementById("dubanyFotky").style.display = "flex";

        document.getElementById("fotkyDubOtevrit").style.backgroundColor = "#ecad54";
        document.getElementById("fotkyDubOtevrit").style.transform = "scale(1.1)";
    }
}

var podlahy = false;
function otevritPodlahy(){
    podlahy = !podlahy;
    if(podlahy == false){
        document.getElementById("podlahyFotky").style.display = "none";

        document.getElementById("fotkyPodOtevrit").style.backgroundColor = "#f7c073";
        document.getElementById("fotkyPodOtevrit").style.transform = "scale(1)";
    }
    if(podlahy == true){
        document.getElementById("podlahyFotky").style.display = "flex";

        document.getElementById("fotkyPodOtevrit").style.backgroundColor = "#ecad54";
        document.getElementById("fotkyPodOtevrit").style.transform = "scale(1.1)";
    }
}

function copyNumber(){
    var copyText = document.getElementById("phoneNumber");
  

    navigator.clipboard.writeText(copyText.textContent);

    alert("kopirovano: " + copyText.textContent);
}
function copyEmail(){
    var copyText = document.getElementById("email");
    navigator.clipboard.writeText(copyText.textContent);

    alert("kopirovano: " + copyText.textContent);
}