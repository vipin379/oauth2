function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
        const alertBox = document.getElementById('alert');

    let result;
    //  Correct input validation
    if (isNaN(temperature)) {
        alertBox.innerText = "Please enter a temperature value!";
        alertBox.style.color = "red";
        return; // Stop further execution
    }
    if (unit === 'celsius') {
        resultF = (temperature * 9 / 5) + 32; // Celsius to Fahrenheit
        resultK = temperature + 273.15; // Celsius to Kelvin
        document.getElementById('result').innerText = `${temperature}°C is ${resultF.toFixed(2)}°F and ${resultK.toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
        resultC = (temperature - 32) * 5 / 9; // Fahrenheit to Celsius
        resultK = resultC + 273.15; // Celsius to Kelvin
        document.getElementById('result').innerText = `${temperature}°F is ${resultC.toFixed(2)}°C and ${resultK.toFixed(2)}K`;
    } else if (unit === 'kelvin') {
        resultC = temperature - 273.15; // Kelvin to Celsius
        resultF = (resultC * 9 / 5) + 32; // Celsius to Fahrenheit
        document.getElementById('result').innerText = `${temperature}K is ${resultC.toFixed(2)}°C and ${resultF.toFixed(2)}°F`;
    }
}
//  Event listener to clear alert when typing starts
document.getElementById('temperature').addEventListener('input', function() {
    document.getElementById('alert').innerText = "";
    document.getElementById('result').innerText = "";
});
