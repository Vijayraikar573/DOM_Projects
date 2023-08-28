let status=document.querySelector("h3");
let btna=document.querySelector(".add");

let flag=0;

btna.addEventListener("click",function(){
    if(flag==0){
        status.innerHTML="Friends";
        status.style.color="red";
        btna.innerHTML="Remove";
        flag=1;
    }
    else{
        status.innerHTML="Strangers";
        status.style.color="blue";
        btna.innerHTML="Add Friend";
        flag=0;
    }
})