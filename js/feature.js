document.getElementById("showCashOut").addEventListener("click",function(){
    document.getElementById("cash_out_form").classList.remove("hidden")
    document.getElementById("add_money_form").classList.add("hidden")
})

document.getElementById("addMoneyShow").addEventListener("click",function(){
    document.getElementById("add_money_form").classList.remove("hidden")
    document.getElementById("cash_out_form").classList.add("hidden")
})