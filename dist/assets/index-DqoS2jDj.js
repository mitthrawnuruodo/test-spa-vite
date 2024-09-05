(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const c of t.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = o(e);
    fetch(e.href, t);
  }
})();
function s() {
  return `
        <div>
            <h2>Temperature Converter</h2>
            <input type="number" id="celsius" placeholder="Celsius">
            <button id="convertToFahrenheit">Convert to Fahrenheit</button>
            <p id="result"></p>
        </div>
    `;
}
function u() {
  const n = document.getElementById("celsius"),
    r = document.getElementById("result");
  document
    .getElementById("convertToFahrenheit")
    .addEventListener("click", () => {
      const o = parseFloat(n.value),
        i = (o * 9) / 5 + 32;
      r.textContent = `${o}°C is ${i}°F`;
    });
}
function d() {
  return `
        <div>
            <h2>Length Converter</h2>
            <input type="number" id="meters" placeholder="Meters">
            <button id="convertToFeet">Convert to Feet</button>
            <p id="result"></p>
        </div>
    `;
}
function l() {
  const n = document.getElementById("meters"),
    r = document.getElementById("result");
  document.getElementById("convertToFeet").addEventListener("click", () => {
    const o = parseFloat(n.value),
      i = o * 3.28084;
    r.textContent = `${o} meters is ${i} feet`;
  });
}
document.getElementById("temp-converter").addEventListener("click", () => {
  const n = document.getElementById("app");
  (n.innerHTML = s()), u();
});
document.getElementById("length-converter").addEventListener("click", () => {
  const n = document.getElementById("app");
  (n.innerHTML = d()), l();
});
