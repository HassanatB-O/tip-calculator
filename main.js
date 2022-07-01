let amount = document.getElementById("amount")
let person = document.getElementById("people")
let button = document.querySelectorAll("#button")
let tipAmount = document.getElementById("tipAmount")
let totalPayment = document.getElementById("total-amount")
let custom = document.getElementById("custom")
let reset = document.getElementById("reset")

amount.addEventListener('keyup', () =>{ 
    inputValue = amount.value
})


button.forEach(button =>{
button.addEventListener('click', () =>{
    let buttonValue  = button.innerHTML

    if(buttonValue === "5%"){
        calc = inputValue * 5 / 100
    }
    else if(buttonValue === "10%"){
        calc = inputValue * 10 / 100
    }
    else if(buttonValue === "15%"){
        calc = inputValue * 15 / 100
    }
    else if(buttonValue === "25%"){
        calc = inputValue * 25 / 100
    }
    else if(buttonValue === "50%"){
        calc = inputValue * 50 / 100
    }
    tipAmount.innerHTML = `$${calc.toFixed(2)}`
})
})

custom.addEventListener('keyup', () =>{
    customValue = custom.value
    cV = inputValue * customValue / 100
    tipAmount.innerHTML = `$${cV}`
    
})

person.addEventListener('keyup', () =>{
    peopleValue = person.value
    overAll = (inputValue / peopleValue) + cV
    totalPayment.innerHTML = `$${overAll.toFixed(2)}`
})

person.addEventListener('keyup', () =>{
    total = (inputValue / peopleValue) + calc
    totalPayment.innerHTML = `$${total.toFixed(2)}`

    
})



reset.addEventListener('click', () =>{
    tipAmount.innerHTML = `$0.00`
    totalPayment.innerHTML = `$0.00`
    amount.value = ""
    person.value = ""
    custom.value = ""
})

