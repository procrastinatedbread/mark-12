const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#istriangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (
    Number(inputs[0].value) &&
    Number(inputs[1].value) &&
    Number(inputs[2].value) &&
    Number(inputs[0].value) > 0 &&
    Number(inputs[1].value) > 0 &&
    Number(inputs[2].value) > 0
  ) {
    if (sumOfAngles === 180) {
      outputEl.innerText = "Yeah, it is a triangle!!!";
    } else {
      outputEl.innerText = "Nope,unfortunately it is not a triangle:(";
    }
  } else {
    outputEl.innerText = "There are empty or negative values";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
