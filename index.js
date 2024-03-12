function CipherResult(){
    var input =parseInt(document.getElementById("move").value);
    var text = document.getElementById("cipher").value;
    var move;
    let i;
    let crypt ="";
    if (input === 0){
      document.getElementById("wrong").innerHTML = "You move must be hight min = 1 " ; 
    }
    for(i=0;i < text.length;i++){
        move = text.charCodeAt(i) + input;
        move = move - 32;
        move = move % (126 - 32);
        move = move + 32;
        crypt = crypt + String.fromCharCode(move);
    }
    document.getElementById("cipher").value = "";
    document.getElementById("decipher").value = crypt;
}
function DecipherResult(){
    var input =parseInt(document.getElementById("move").value);
    var text = document.getElementById("decipher").value;
    var move;
    let i;
    let crypt ="";
    if (input === 0){
        document.getElementById("wrong").innerHTML = "You move must be hight min = 1 " ; 
      }
    for(i=0;i < text.length;i++){
        move = text.charCodeAt(i) - input;
        move = move - 32;
        move = move % (126 - 32);
        move = move + 32;
        crypt = crypt + String.fromCharCode(move);
    }
    document.getElementById("cipher").value = crypt;
    document.getElementById("decipher").value = "";
}
