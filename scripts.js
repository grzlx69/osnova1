function getFormValues() {
    let form = document.getElementById('myForm');
    let value_one = parseFloat(form.value_one.value);
    let value_two = parseFloat(form.value_two.value);
    return { value_one, value_two };
}

function addition(){
    let values = getFormValues();
    let result = values.value_one + values.value_two;
    showResult('+', values.value_one, values.value_two, result);
}

function substraction(){
    let values = getFormValues();
    let result = values.value_one - values.value_two;
    showResult('-', values.value_one, values.value_two, result);
}

function multiplication(){
    let values = getFormValues();
    let result = values.value_one * values.value_two;
    showResult('*', values.value_one, values.value_two, result);
}

function division(){
    let values = getFormValues();
    let result = values.value_one / values.value_two;
    showResult('/', values.value_one, values.value_two, result);
}


function showResult(operation, value_one, value_two, result) {
    let output = document.getElementById('result');
    output.textContent = `${value_one} ${operation} ${value_two} = ${result}`;
}