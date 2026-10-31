
const d = document.querySelector("#display");
const k = document.querySelector("#keys");
document.querySelector("#clearHistory").onclick = () => {
  h.innerHTML = "";
};
const h = document.querySelector("#history");

const buttons = [
  "sin","cos","tan","AC",
  "√","log","ln","DEL",
  "(",")","π","÷",
  "7","8","9","×",
  "4","5","6","−",
  "1","2","3","+",
  "x²","0",".","=",
  "^","%","!","e"
];

buttons.forEach(v => {
  const b = document.createElement("button");
  b.textContent = v;
  b.onclick = () => press(v);
  k.appendChild(b);
});

function press(v) {
  if (v === "AC") d.value = "";
  else if (v === "DEL") d.value = d.value.slice(0, -1);
  else if (v === "=") calculate();
  else {
    const values = {
      sin:"sin(", cos:"cos(", tan:"tan(", "√":"√(",
      log:"log(", ln:"ln(", "π":"π", "÷":"/",
      "×":"*", "−":"-", "x²":"^2", e:"e"
    };
    d.value += values[v] ?? v;
  }
}

function calculate() {
  try {
    const original = d.value;
    let s = original.replace(/\s/g, "");

    s = s.replace(/(\d+(?:\.\d+)?)!/g, (_, n) => {
      let x = Number(n);
      if (!Number.isInteger(x) || x < 0 || x > 170) throw Error();
      let r = 1;
      for (let i = 2; i <= x; i++) r *= i;
      return String(r);
    });

    s = s.replace(/π/g, "Math.PI").replace(/\be\b/g, "Math.E")
      .replace(/÷/g, "/").replace(/×/g, "*").replace(/−/g, "-")
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/\bsin\(/g, "Math.sin(Math.PI/180*")
      .replace(/\bcos\(/g, "Math.cos(Math.PI/180*")
      .replace(/\btan\(/g, "Math.tan(Math.PI/180*")
      .replace(/\blog\(/g, "Math.log10(")
      .replace(/\bln\(/g, "Math.log(")
      .replace(/\^/g, "**")
      .replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");

    const result = Function('"use strict"; return (' + s + ')')();
    if (typeof result !== "number" || !Number.isFinite(result)) throw Error();

    const item = document.createElement("li");
    item.textContent = `${original} = ${Number(result.toPrecision(12))}`;
    h.prepend(item);
    d.value = Number(result.toPrecision(12));
  } catch {
    d.value = "Error";
  }
}

document.addEventListener("keydown", e => {
  if (/^[0-9.]$/.test(e.key)) d.value += e.key;
  else if (["+", "-", "*", "/", "(", ")", "%", "^"].includes(e.key))
    d.value += e.key;
  else if (e.key === "Enter" || e.key === "=") {
    e.preventDefault(); calculate();
  } else if (e.key === "Backspace") d.value = d.value.slice(0, -1);
  else if (e.key === "Escape" || e.key === "Delete") d.value = "";
});
