let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');


function math(a){
    if(a == 'plus'){
        result.value = Number(num1.value) + Number(num2.value);
    }
    else if(a=='minus'){
        result.value = Number(num1.value) - Number(num2.value);
    }
    else if(a=='division'){
        result.value = Number(num1.value) / Number(num2.value);
    } 
    else if(a=='multi'){
        result.value = Number(num1.value) * Number(num2.value);
    }
}