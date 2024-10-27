
    function  checkChar() {

var input = document.getElementById("charInput").value;

if  (input === "a" ||
     input === "e" || 
     input === "i" || 
     input === "o" || 
     input === "u" ||
     input === "A" ||
     input === "E" || 
     input === "I" || 
     input === "O" || 
     input === "U" 
     ) {
      document.getElementById("result").innerHTML = "Given character is a vowel";
}else{
  document.getElementById("result2").innerHTML = "Given character is not a vowel";
}
}
