const btn = document.getElementById("btn");
const strat = document.getElementById("btns");
const input = document.getElementById("text");
const msg1 = document.getElementsByClassName("congrets");
const msg2 = document.getElementsByClassName("steps");

strat.addEventListener('click',(e)=>{
    const randNumber =Math.floor( Math.random()*100+1);
console.log(randNumber);
let count =0;
msg1[0].textContent="";
msg2[0].textContent="";
strat.innerText ="Re-start"
game(randNumber, count);

})

  
function game(randNumber,count){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(input.value > randNumber){
            count++;
            msg1[0].textContent=" Too Height !, Enter a less number";
            msg2[0].textContent="";
        }else if(input.value < randNumber){
            count++;
            msg1[0].textContent=" Too low ! , Enter a greater number"
            msg2[0].textContent="";
        }else{
            count++;
            msg1[0].textContent = " You Find the number";
            msg2[0].textContent = ` your steps to find number is ${count}`
            count=0;
         }
    })
}
