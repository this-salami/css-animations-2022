const r = document.querySelector(':root');

let currPerc = 0;
let interval = 300;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function setValue(name, val){
  r.style.setProperty(name, val);
}

function loop(){
  let random = randomInt(2, 20);
  
  currPerc = (currPerc == 100) ? 0 : (currPerc + random > 100) ? 100 : currPerc + random;
  interval = (currPerc >= 100) ? 1500 : randomInt(900, 1200);
  
  setValue("--bar-width", `${currPerc}%`);
  
  setTimeout(loop, interval);
}

loop();