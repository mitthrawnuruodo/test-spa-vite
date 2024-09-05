import { renderTemperatureConverter, initTemperatureConverter } from './modules/tempConverter.js';
import { renderLengthConverter, initLengthConverter } from './modules/lengthConverter.js';

document.getElementById('temp-converter').addEventListener('click', () => {
    const app = document.getElementById('app');
    app.innerHTML = renderTemperatureConverter();
    initTemperatureConverter();
});

document.getElementById('length-converter').addEventListener('click', () => {
    const app = document.getElementById('app');
    app.innerHTML = renderLengthConverter();
    initLengthConverter();
});