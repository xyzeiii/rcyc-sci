function playSound(){
  document.getElementById("clickSound").play();
}

function fadeTransition(next){
  const fade = document.getElementById("fade");

  fade.style.opacity = 1;

  setTimeout(()=>{
    document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
    document.getElementById(next).classList.add("active");
    fade.style.opacity = 0;
  },500);
}

/* MAIN DOOR */
function enterMain(el){
  playSound();

  el.classList.add("opening");

  setTimeout(()=>{
    fadeTransition("mainRoom");
  },500);
}

/* GO TO DOORS */
function goDoors(){
  playSound();
  fadeTransition("doorsScreen");
}

/* CINEMATIC OPEN */
function openDoor(el, num){
  playSound();

  el.classList.add("opening");

  setTimeout(()=>{
    el.classList.add("zoom");
  },200);

  setTimeout(()=>{
    document.getElementById("roomImage").src = `images/room${num}.png`;
    fadeTransition("roomScreen");

    el.classList.remove("opening","zoom");
  },700);
}

/* BACK */
function back(){
  playSound();
  fadeTransition("doorsScreen");
}