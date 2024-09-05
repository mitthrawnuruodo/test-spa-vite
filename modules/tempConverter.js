export function renderTemperatureConverter() {
    return `
        <div>
            <h2>Temperature Converter</h2>
            <input type="number" id="celsius" placeholder="Celsius">
            <button id="convertToFahrenheit">Convert to Fahrenheit</button>
            <p id="result"></p>
        </div>
    `;
}

export function initTemperatureConverter() {
    const celsiusInput = document.getElementById('celsius');
    const result = document.getElementById('result');
    document.getElementById('convertToFahrenheit').addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is ${fahrenheit}°F`;
    });
}