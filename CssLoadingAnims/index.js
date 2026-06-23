let styleIndex = 0;
if (window.localStorage.savedIndex){
  styleIndex = parseInt(window.localStorage.getItem("savedIndex"));
}

const styleList = [
  {elems:"Circle", name:"Circle"}, 
  {elems:"_3Dots", name:"Dots"}, 
  {elems:"_3Bars", name:"Bars"},
  {elems:"_3BarsRebound", name:"Bars (Rebound)"}, 
  {elems:"Square", name:"Square"},
  {elems:"arcs", name:"Arc"},
  {elems:"InvertedRotation", name:"Inverted Rotation"}, 
  {elems:"HalfInvertedCircle", name:"Inverted Circle"},
  {elems:"HalfInvertedCircle2", name:"Circle"}
];
const transitionElem = document.getElementById("Transition");

const transitionText = document.getElementById("Info");
const transitionText2 = document.getElementById("Name");

let style; let elem; let name; let nameAddon;

let canClick = true;

function valid(x){
  return (styleList.length - 1) >= x && x >= 0;
}

function update(){
  if (elem){
    elem.style.display = "none";
  }
  if (valid(styleIndex)){
    style = styleList[styleIndex];
    elem = document.getElementById(style.elems);
    name = style.name;
    
    elem.style.display = "initial";
    
    transitionText.innerText = `use mouse to cycle - rmb/lmb (${styleIndex + 1}/${styleList.length})`;
    
    transitionText2.innerText = name;
    
    window.localStorage.setItem("savedIndex", styleIndex);
  }
  
  setTimeout(function(){
    canClick = true;
  }, 200);
}

function onClick(){
  transitionElem.classList.remove('transitionAnim');
  void transitionElem.offsetWidth;
  transitionElem.classList.add('transitionAnim');
   
  
  transitionText.classList.remove('transitionText');
  void transitionText.offsetWidth;
  transitionText.classList.add('transitionText');
  
  transitionText2.classList.remove('transitionText');
  void transitionText2.offsetWidth;
  transitionText2.classList.add('transitionText');
}

setTimeout(function(){
  document.addEventListener("click", e => {
    if (canClick){
      canClick = false;
      styleIndex += 1;
      if (!valid(styleIndex)){
        styleIndex = 0;
      }

      onClick();
      setTimeout(update, 400);
    }
  });

  document.addEventListener("contextmenu", e => {
    if (canClick){
      canClick = false;
      styleIndex -= 1;
      if (!valid(styleIndex)){
        styleIndex = styleList.length - 1;
      }

      onClick();
      setTimeout(update, 400);
    }
  });
}, 6000);

update();

window.addEventListener("contextmenu", e => e.preventDefault());