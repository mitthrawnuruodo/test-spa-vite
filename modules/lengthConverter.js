export function renderLengthConverter() {
  return `
        <div>
            <h2>Length Converter</h2>
            <input type="number" id="meters" placeholder="Meters">
            <button id="convertToFeet">Convert to Feet</button>
            <p id="result"></p>
        </div>
    `;
}

export function initLengthConverter() {
  const metersInput = document.getElementById("meters");
  const result = document.getElementById("result");
  document.getElementById("convertToFeet").addEventListener("click", () => {
    const meters = parseFloat(metersInput.value);
    const feet = meters * 3.28084;
    result.textContent = `${meters} meters is ${feet} feet`;
  });
}
