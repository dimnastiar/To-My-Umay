// PASSWORD

function checkName(){

let name = document
.getElementById("nameInput")
.value.toUpperCase();

if(name == "UMAY"){

alert("WELCOME MY LOVE ❤️");

window.scrollTo({

top:window.innerHeight*2,
behavior:"smooth"

});

}else{

document.getElementById("error").innerHTML =
"EHHH INI KHUSUS UMAY YA!!!";

}

}



// MUSIC

function playMusic(){

let music = document
.getElementById("music");

music.play();

}



// LETTER

function openLetter(){

document
.getElementById("letter")
.style.display="block";

}



// LOVE REASONS

const reasons = [

"Your smile.",
"Your laugh.",
"Your eyes.",
"Your kindness.",
"Your voice.",
"Your existence.",
"Your support.",
"Your patience.",
"Your hugs.",
"Your jokes.",
"Your love.",
"Your honesty.",
"Your personality.",
"Your beauty.",
"Your dreams.",
"Your heart.",
"Your effort.",
"Your happiness.",
"Your soul.",
"Because you're UMAY."

];

let i=0;

function nextReason(){

i++;

if(i>=reasons.length){

i=0;

}

document
.getElementById("reason")
.innerHTML = reasons[i];

}



// VIRTUAL HUG

function virtualHug(){

document
.getElementById("hugText")
.innerHTML =

"🫂 +999 LOVE POINTS<br><br>I LOVE YOU UMAY";


if(navigator.vibrate){

navigator.vibrate(500);

}

}




// LOVE RAIN

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize="20px";

document.body.appendChild(heart);

let topPos=0;

let timer=setInterval(()=>{

topPos+=3;

heart.style.top=topPos+"px";

if(topPos>window.innerHeight){

heart.remove();
clearInterval(timer);

}

},20);


},400);