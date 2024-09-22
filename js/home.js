
document.getElementById("addMoney").addEventListener("click",function(event){

   event.preventDefault(); 
   const addMoneyInput = document.getElementById("addMoneyInput").value ; 
   
   
   const pinNumberInput = document.getElementById("pinNumberInput").value;
  
   
   if(pinNumberInput ===  "1234" ){
    
    const balance = document.getElementById("accountBalance").innerText;
    
   const addMonerNumber = parseFloat(addMoneyInput);
   const balanceNumber = parseFloat(balance);
    
   const  newbalance = addMonerNumber + balanceNumber;
   console.log(newbalance);
   
   document.getElementById("accountBalance").innerText = newbalance; 
    
   }
   else{
    alert("Failed to add money ! please try again")
   }
    
})