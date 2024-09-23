document.getElementById("addMoney")
.addEventListener("click",function(event){
   event.preventDefault();
   
   const money = document.getElementById("addMoneyInput").value ;
  
   const addMoney = parseFloat(money);
   

   
   const pin = document.getElementById("pinNumberInput").value;
   

   
   if( pin=== "1234"){
       
       const balance = document.getElementById("accountBalance").innerText;
       
       const addbalance = parseFloat(balance);

       const newbalance = addbalance + addMoney ;

       document.getElementById("accountBalance").innerText = newbalance;


       
      
   }
   else {
      alert("please correct the pin and amount number");
   }
    
   
    
})