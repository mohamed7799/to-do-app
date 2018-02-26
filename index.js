//variables//
let add_But=document.getElementById("add-but");
let input=document.getElementById("input");
let tasks=document.getElementById("tasks");
//functions//
function add(){
    if(input.value===""){
        alert("please enter a task");
    }
    else{
    let newItem=document.createElement("LI");
    newItem.innerHTML=`<i class="far fa-trash-alt"></i> ${input.value}`;
    tasks.appendChild(newItem);
    input.value="";
    }
}
//eventlistenrs//

//for the plus button

add_But.addEventListener("click",add);

//for the Enter key

document.addEventListener('keypress', function (e) {
    //use which or keycode to work on all browsers
    var key = e.which || e.keyCode;
    if (key === 13) { 
      add();
    }
});

//remove a task
tasks.addEventListener("click",function(event){
    let button =event.target;
    if(button.tagName!='I'){
        return;
    }
    button.parentElement.outerHTML=""; 
})