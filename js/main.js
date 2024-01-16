// Triangle math solution
function getTriangle() {
    const bNumber = document.getElementById('b-value').value;
    const currentbNumber = parseFloat(bNumber);
    bNumber.value = '';

    const hNumber = document.getElementById('h-value').value;
    const currenthNumber = parseFloat(hNumber);
    hNumber.value = '';

    const area = 0.5 * currentbNumber * currenthNumber;

    const textField = document.querySelector('.t-result');
    textField.innerText = area.toFixed(2);

    return area; // Return the calculated result
}

// Rectangle math solution
function getRectangle() {
    const wNumber = document.getElementById('w-value').value;
    const currentwNumber = parseFloat(wNumber);
    wNumber.value = '';

    const iNumber = document.getElementById('i-value').value;
    const currentiNumber = parseFloat(iNumber);
    iNumber.value = '';

    const area = currentwNumber * currentiNumber;

    const rectangleTextField = document.querySelector('.r-result');
    rectangleTextField.innerText = area.toFixed(2);

    return area; // Return the calculated result
}

// Parallelogram math solution
function getParallelogram() {
    const bNumber = document.getElementById('b-field').value;
    const currentbNumber = parseFloat(bNumber);
    bNumber.value = '';

    const hNumber = document.getElementById('h-field').value;
    const currenthNumber = parseFloat(hNumber);
    hNumber.value = '';

    const area = currentbNumber * currenthNumber;

    const parallelogramTextField = document.querySelector('.pa-result');
    parallelogramTextField.innerText = area.toFixed(2);

    return area; // Return the calculated result
}
// Rhombus math calculation 
function getrhombus() {
    const d1Input = document.getElementById('d1-field');
    const dNumber = parseFloat(d1Input.value);
    d1Input.value = '';

    const d2Input = document.getElementById('d2-field');
    const d2Number = parseFloat(d2Input.value);
    d2Input.value = '';

    const area = 0.5 * dNumber * d2Number;

    const rhombusTextField = document.querySelector('.rh-result');
    rhombusTextField.innerText = area.toFixed(2);
}

// Pentagon math soluation
function getPentagon() {
    const pInput = document.getElementById('p-field').value;
    const currentpInput = parseFloat(pInput);
    document.getElementById('p-field').value = '';

    const bInput = document.getElementById('bb-filed').value;
    const currentbInput = parseFloat(bInput);
    document.getElementById('bb-filed').value = '';

    let area;

    if (currentpInput == 6 && currentbInput == 10) {
        area = 0.5 * currentbInput * currentpInput;
        
    } else {
        alert('Put valid numbers (p=6, b=10)');
    }

    const pentagonTextField = document.getElementById('pen-result');

    pentagonTextField.innerText = area.toFixed(2);

    return area;
}

function getEllipse() {
    const aInput = document.getElementById('a-field').value;
    const currentaInput = parseFloat(aInput);
    aInput.value = '';

    const bInput = document.getElementById('b-field-ellipse').value;
    const currentbInput = parseFloat(bInput);
    bInput.value = '';

    const area = 3.1416 * currentaInput * currentbInput;

    const ellipseTextField = document.getElementById('e-result');
    ellipseTextField.innerText = area.toFixed(2); // Optionally, you can round the result to 2 decimal places

    return area;
}

document.getElementById('e-calculate').addEventListener('click', function () {
    const result = getEllipse();
});



document.getElementById('t-calculate').addEventListener('click', function () {
    const result = getTriangle();
    
});

document.getElementById('r-calculate').addEventListener('click', function () {
    const result = getRectangle();
    
});

document.getElementById('p-calculate').addEventListener('click', function () {
    const result = getParallelogram();
    
});

document.getElementById('ru-calculate').addEventListener('click', function () {
    const result = getrhombus();
});
document.getElementById('pen-calculate').addEventListener('click', function () {

    const result = getPentagon();
});
document.getElementById('e-calculate').addEventListener('click',function(){
    const result = getEllipse();
})