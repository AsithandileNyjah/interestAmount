let amount = document.querySelector('[amount]').value

let years = document.querySelector('[years]').value

let interest = document.querySelector('[interest]').value

let btn = document.querySelector('[cal]')

let btn2 = document.querySelector('[clear]')

let display = document.querySelector('[totalAmount]')

btn.addEventListener('click', count)

btn2.addEventListener('click', clear)

function count (){
    let amount = document.querySelector('[amount]').value
    let years = document.querySelector('[years]').value
    let interest = document.querySelector('[interest]').value
    let answer = eval(amount * (1 + interest/100 *years))
    console.log(answer);
    display.value = answer
}


function clear (){
    document.querySelector('[years]').value = '';
    document.querySelector('[amount]').value = '';
    document.querySelector('[interest]').value = '';
    document.querySelector('[totalAmount]').value = '';
}