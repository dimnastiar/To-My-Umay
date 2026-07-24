

// MUSIC

function startWebsite(){

let music = document.getElementById("music");

music.play();

window.scrollTo({

top:window.innerHeight,
behavior:"smooth"

});

}



// LOVE RAIN


setInterval(createLove,400);


function createLove(){


const love = document.createElement("div");

love.classList.add("love");

love.innerHTML="❤️";


love.style.left=Math.random()*100+"vw";

love.style.animationDuration=Math.random()*3+3+"s";


document.body.appendChild(love);


setTimeout(()=>{

love.remove();

},6000);


}





// LOVE REASONS


const reasons = [

"20. Your smile.",
"1. Your eyes.",
"2. Your laugh.",
"3. Your kindness.",
"4. Your voice.",
"5. Your hugs.",
"6. Your personality.",
"7. Your effort.",
"8. Your patience.",
"9. Your honesty.",
"10. Your existence.",
"11. Your dreams.",
"12. Your support.",
"13. Your happiness.",
"14. Your jokes.",
"15. Your soul.",
"16. Your beauty.",
"17. Everything about you.",
"18. You're my safe place.",
"19. Because you're UMAY."

];



let i = 0;


function nextReason(){


i++;

if(i >= reasons.length){

i = 0;

}


document.getElementById("reason").innerHTML = reasons[i];


}





// VIRTUAL HUG


function virtualHug(){


document.getElementById("hugText").innerHTML =

"🫂<br><br>Sending 999999 LOVE POINTS...<br><br>I LOVE YOU UMAY ❤️";


if(navigator.vibrate){

navigator.vibrate(500);

}


}





// TOGETHER COUNTER


function updateCounter(){


const startDate = new Date("2025-01-01");


const now = new Date();


const diff = now - startDate;



const seconds = Math.floor(diff / 1000);

const minutes = Math.floor(seconds / 60);

const hours = Math.floor(minutes / 60);

const days = Math.floor(hours / 24);



document.getElementById("days").innerHTML =

days + " Days";


document.getElementById("hours").innerHTML =

hours + " Hours";


document.getElementById("minutes").innerHTML =

minutes + " Minutes";


document.getElementById("seconds").innerHTML =

seconds + " Seconds";


}



setInterval(updateCounter,1000);


updateCounter();
