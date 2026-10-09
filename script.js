const  passwordbox=document.getElementById("places");
const button=document.getElementById("btn");
const copied=document.getElementById("icons")
const length=12;

// all characters are defined
const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const specialsymbol="!@#$%^&*()+_=-?/>.<,;:";

const allchars=upper+lower+numbers+specialsymbol;


function generatepassword(){
    let password="";
    password+=upper[Math.floor(Math.random()*upper.length)];
    password+=lower[Math.floor(Math.random()*lower.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=specialsymbol[Math.floor(Math.random()*specialsymbol.length)];

    while(password.length<length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
   
    password=password.split('').sort(()=>0.5-Math.random()).join('');

    passwordbox.value=password;
}

button.addEventListener("click",generatepassword);

copied.addEventListener("click",()=>{
    if(passwordbox.value){
        navigator.clipboard.writeText(passwordbox.value);
        alert("password copied to clipboard");
    }
});

