let select=document.querySelectorAll('#currency')
let input=document.getElementById('input')
let main=document.querySelector('.container')
let btn=document.getElementById('btn')
let alert=document.getElementById('alert')
alert.remove();
let newElement=document.createElement('h3')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(msg=>displaydropdown(msg))


function displaydropdown(msg){
    let curr=Object.entries(msg)
    for(let i=0;i<curr.length;i++){
      let abb =`<option value=${curr[i][0]}>${curr[i][0]}</option>`
      select[0].innerHTML += abb
      select[1].innerHTML+=abb
    }
    
}

btn.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let money=input.value
    if(curr1==curr2)
        main.appendChild(alert)
    else{
       alert.remove();
       convert(curr1,curr2,money)
}})
function convert(curr1,curr2,money){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${money}&from=${curr1}&to=${curr2}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById('result').value=Object.values(data.rates)[0]
        
      });
}    
