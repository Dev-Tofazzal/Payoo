document.getElementById("addMoney").addEventListener("click",function(event){
   event.preventDefault();
   
   const money = document.getElementById("addMoneyInput").value ;
   console.log(money);
   
   const pin = document.getElementById("pinNumberInput").value;
   console.log(pin );

   
   if( pin=== "1234"){
       
       const balance = document.getElementById("accountBalance").innerText;
       
       const addbalance = parseFloat(balance);
       const addMoney = parseFloat(money);

       const newbalance = addbalance + addMoney ;

       document.getElementById("accountBalance").innerText = newbalance;


       
      
   }
   else {
      alert("please correct the pin and amount number");
   }
    
   
    
})