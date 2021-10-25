const TAX_RATE = 0.08;
const MOBILE_PRICE = 99.99;
const ACCE_PRICE = 9.99;
const SPENDING_THRESHOLD = 245.21;
let bank_balance = 530.58;
let amount = 0;
function totalTax(amount){
    return amount*TAX_RATE;
}
function amountFormation(){
    return `$ ${amount.toFixed(2)}`;
}

while(bank_balance > amount){
   amount +=MOBILE_PRICE;
   if(amount < SPENDING_THRESHOLD){
       amount+=ACCE_PRICE;
   }
}

amount+=totalTax(amount);
console.log("total cost "+" "+amountFormation(amount));

if(amount> bank_balance){
    console.log("You have not enough money");
}