

let btn=document.getElementById("btn");
let totalEle=document.getElementById("total");
let tipEle=document.getElementById("tip");

let billInp=document.getElementById('billInp')
let tipInp=document.getElementById('tipInp')

const calculate =()=> {
    if(billInp.value=="" && tipInp.value==""){
        alert("Please fill the fields");
    }
    else{
        let total=(billInp.value * tipInp.value)/100;
        totalEle.innerText="Rs."+(parseInt(total)+parseInt(billInp.value));
        tipEle.innerText="Rs. "+Math.round((billInp.value * tipInp.value)/100);
        billInp.value="";
        tipInp.value="";
    }
}
