let selectOptionValue = document.getElementById('temperature');

let numberInput = document.getElementById('number');

selectOptionValue.addEventListener('change', () => {
    document.getElementById('paragraph').innerText = '';
    switch (selectOptionValue.value) {
        case 'Celsius-to-Fahrenheit':
            numberInput.placeholder = 'Input Celsius value';
            break;
        case 'Fahrenheit-to-Celsius':
            numberInput.placeholder = 'Input Fahrenheit value';
            break;
        case 'Celsius-to-Kelvin':
            numberInput.placeholder = 'Input Celsius value';
            break;
        case 'Fahrenheit-to-Kelvin':
            numberInput.placeholder = 'Input Fahrenheit value'
            break;
        case 'Select Scale':
            numberInput.placeholder = 'Select a scale'
            break;
    }
})
function calculateNum() {
    let numberInputValue = numberInput.value;
    if (numberInputValue === '') {
        return false
    }
    let selectOption = document.getElementById('temperature').value;
    switch (selectOption) {
        case 'Celsius-to-Fahrenheit':
            let fahrenheit = (numberInputValue * 9/5) + 32 + '⁰F';
            document.getElementById('paragraph').innerText = fahrenheit;
            break;
        case 'Fahrenheit-to-Celsius':
            let celsius = (numberInputValue - 32) * 5/9 + '⁰C';
            document.getElementById('paragraph').innerText = celsius;
            break;
        case 'Celsius-to-Kelvin':
            let kelvin = Number((numberInputValue)) + 273 + 'K';
            document.getElementById('paragraph').innerText = kelvin;
            break;
        case 'Fahrenheit-to-Kelvin':
            let fahrenheitToKelvin = Number(numberInputValue);
            let fahToKel = (fahrenheitToKelvin - 32) * 5/9 + 273 + 'K';
            document.getElementById('paragraph').innerText = fahToKel;
            break;
        case 'Select Scale':
            alert('Please select a scale!');
            break;
    }

    numberInput.value = '';

}
let addBtn = document.querySelector('.calculate-btn');
addBtn.addEventListener('click', function() {
    calculateNum()
})