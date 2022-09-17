const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function calculateHypotenuse() {
  if (sides[0].value <= 0 || sides[1].value <= 0) {
    outputEl.innerText = "Sides can't be negative or zero";
  } else {
    const sumOfSquares = calculateSumOfSquares(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
  }
  //   return outputEl.innerText;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
