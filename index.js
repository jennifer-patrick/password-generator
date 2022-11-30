const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// grab elements from the DOM: pass1 and pass2 boxes

// create function generate() that creates random 15 char pass from characters variable
// this will generate .textContent for both password boxes
//use for loop and then a also random math number 

let password1 = document.getElementById("password1-el")
let password2 = document.getElementById("password2-el")

function generate() {
    password1.textContent = " "
    password2.textContent = " "
    
    for (let i=0; i<16;i++){
        password1.textContent += characters[Math.floor( Math.random() * characters.length) ]
    }
    for (let i=0; i<16;i++){
        password2.textContent += characters[Math.floor( Math.random() * characters.length) ]
    }
}


