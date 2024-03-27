const containerEl=document.getElementById("container");
const listContainerEL=document.getElementById("list-container");
const inputEl=document.getElementById("input");
// const addEl=document.getElementById("add");
const listEl=document.getElementById("list");
const numberEl=document.getElementById("number");

// Add list section

let number=0;
function addEl(){
  if(inputEl.value!=""){
    number++;
  let list=document.createElement("li");
  list.textContent=inputEl.value;
  list.classList.add("lists");
  list.addEventListener("click",()=>{
    if(!list.classList.contains("selected")){
      list.classList.add("selected");
      number--;
      numberEl.textContent=`${number} task left`;
    }
    else{
      list.classList.remove("selected");
      number++;
      numberEl.textContent=`${number} task left`;
    }
  });
  const button=document.createElement("button");
  button.textContent="x";
  button.classList.add("closeButton");
  button.addEventListener("click",()=>{
    button.parentElement.style.display="none";
    number--;
    numberEl.textContent=`${number} task left`;
  })
  list.appendChild(button);
  listEl.appendChild(list);
  numberEl.textContent=`${number} task left`;
  }
};

// clear all section

const complete=document.getElementById("comp");
complete.addEventListener("click",()=>{
  let child=listEl.lastElementChild;
  while(child){
    listEl.removeChild(child);
    child=listEl.lastElementChild;
  }
  number=0;
  numberEl.textContent=`${number} task left`;
});

// complete all section
const ctask=document.getElementById("ctask");
ctask.addEventListener("click",()=>{
  let childnod=listEl.childNodes;
  childnod.forEach((items)=>{
    items.classList.add("selected");
  })

  number=0;
  numberEl.textContent=`${number} task left`;
});
// clear selected section

const clearEl=document.getElementById("clea");
clearEl.addEventListener("click",()=>{
  let selected=document.getElementsByClassName("selected");
  while(selected.length!=0){
    selected[0].parentElement.removeChild(selected[0]);
  }
});

// visibility section

const select=document.getElementById("select");
select.addEventListener("click",()=>{
 listEl.childNodes.forEach((items)=>{
  items.classList.remove("unvisible");
  if(!items.classList.contains("selected")){
    items.classList.add("unvisible");
  }
 })
 
})

const unselect=document.getElementById("unselected");
unselect.addEventListener("click",()=>{
 listEl.childNodes.forEach((items)=>{
  items.classList.remove("unvisible");
  if(items.classList.contains("selected")){
    items.classList.add("unvisible");
  }
 })
})

const all=document.getElementById("All");
all.addEventListener("click",()=>{
 listEl.childNodes.forEach((items)=>{
  items.classList.remove("unvisible");
 })
})