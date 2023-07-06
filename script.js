const inputBox=document.getElementById('input-box');
const listBlock=document.getElementById('list-block');

const taskCount=document.getElementById('count');

let count=0;

function addTask(){
    if(inputBox.value === ""){
        alert("The input field should not be blank");
    }
    else{

        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listBlock.appendChild(li);
        count++;
        taskCount.innerHTML=count;

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}

listBlock.addEventListener('click',function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        count--;
        taskCount.innerHTML=count;
    }
},false);