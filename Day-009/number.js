const btn = document.getElementById("btn");
const strat = document.getElementById("btns");
const input = document.getElementById("text");
const msg1 = document.getElementsByClassName("congrets");
const msg2 = document.getElementsByClassName("steps");
let count  =0;

strat.addEventListener('click',(e)=>{
    const randNumber =Math.floor( Math.random()*100+1);
console.log(randNumber);
strat.innerText ="Re-start"
game(randNumber);

})

  
function game(randNumber){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(input.value > randNumber){
            count++;
            msg1[0].textContent=" Too Height !, Enter a less number"
        }else if(input.value < randNumber){
            count++;
            msg1[0].textContent=" Too low ! , Enter a greater number"
        }else{
            count++;
            msg1[0].textContent = " You Find the number";
            msg2[0].textContent = ` your steps to find number is ${count}`
            count=0;
         }
    })
}