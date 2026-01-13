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

var podlahy = false;
function otevritPodlahy(){
    podlahy = !podlahy;
    if(podlahy == false){
        document.getElementById("podlahyFotky").style.display = "none";
    }
    if(podlahy == true){
        document.getElementById("podlahyFotky").style.display = "flex";
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