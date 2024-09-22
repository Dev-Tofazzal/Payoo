document.getElementById("logInBtn").addEventListener("click",function(event){
    
    event.preventDefault();
    console.log("click hoise");

    const phoneNumber= document.getElementById("phoneNumber").value;
    
    const pinNumber = document.getElementById("pinNumber").value;
    console.log(phoneNumber,pinNumber);

    if(phoneNumber === "5" && pinNumber === "1234"){
        console.log("you are loged in ");
        window.location.href= "/home.html"
        
    }
    else{
        alert("wrong phone number or pin")
    }
    
})