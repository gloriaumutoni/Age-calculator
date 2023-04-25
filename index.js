let input1=document.querySelector("#input1")
let input2=document.querySelector("#input2")
let input3=document.querySelector("#input3")

let par1=document.querySelector("#par1")
let par2=document.querySelector("#par2")
let par3=document.querySelector("#par3")

function but(){
par1.innerHTML=input1.value;
par2.innerHTML=input2.value;
par3.innerHTML=input3.value;
}

// const form=doument.querySelector("form")

// form.addEventListener("submit",handlesubmit);

// const date=new Date();
// let day=date.getDate();
// let month=1+dateMonth();
// let year=date.getFullYear();

// const months=[31,28,31,30,31,30,31,31,30,31,30,31];

// function validate(){
//     const inputs=document.querySelectorAll("input");
//     let validator=true;
//     inputs.forEach((i)=>{
//         const parent=i.parentElement;
//         if(!i.value){
// i.style.borderColor="red";
// parent.querySelector("small").innerText="this field is required.";
// validator=false;
//         }
//         else if(monthInp.value>12){
//             monthInp.style.borderColor="red";
//             monthInp.parentElement.querySelector("small").innerText="must be a valid month";
//             validator=false;
//         }
//         else if(dayInput.value>31){
//             dayInp.style.borderColor="red";
//             dayInp.parentElement.querySelector("small").innerText="must be a valid day";
//             validator=false; 
//         }
//         else{
//             i.style.borderColor="black";
//             parent.querySelector("small").innerText="";
//             validator=true;
//         }
//     })
//     return validator;
// }

// function handlesubmit(e){
//     e.preventDefault();
//     if(validate()){
//         if(dayInp.value>day){
//             day=day+months[month-1];
//             month=month-1;
//         }
//         if(monthInp.value>month){
//             month=month+12;
//             year=year-1;
//         }

//         const d=day-dayInp.value;
//         const m=month-monthInp.value;
//         const y=year-yearInp.value;

//         dayOtp.innerHtml=d;
//         monthOtp.innerHtml=m;
//         yearOtp.innerHtml=y;
//     }
   
// }