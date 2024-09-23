
document.getElementById("cashOutbtn").addEventListener("click",function(event){
    event.preventDefault();
    const cashOutMoney = document.getElementById("cashOutMoney").value ;
    
    const cashOutamount = parseFloat(cashOutMoney);


    const cashOutPin = document.getElementById("cashOutPin").value;

    
    

    if(cashOutPin === "1234"){

        const balance = document.getElementById("accountBalance").innerText;
        

        const balanceNumber = parseFloat(balance);

        const newbanlance = balanceNumber - cashOutamount;

        document.getElementById("accountBalance").innerText = newbanlance;
    }
    else{
        alert("please fill up correct pin number")
    }
    
})