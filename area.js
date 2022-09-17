const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea(a, b) {
  const areaTriangle = 0.5 * a * b;
  return areaTriangle;
}

function calculateAreaFinal() {
  if (sides[0].value <= 0 || sides[1].value <= 0) {
    outputEl.innerText = "Sides can't be negative or zero";
  } else {
    const areaTriangle = calculateArea(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    outputEl.innerText = "The area of the triangle is " + areaTriangle;
  }
}
areaBtn.addEventListener("click", calculateAreaFinal);
