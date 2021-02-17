const amount = document.querySelector("[name=amount]");
const btn = document.querySelector("#calculate");
const output = document.querySelector(".output");
const outputAmount = document.querySelectorAll(".output h3")[1];
const numberOfPeople = document.querySelector("[name=number-of-people]");
const optionNameToNumber = (value) => {
  switch (value) {
    case "thirty":
      return 0.3;
    case "twenty":
      return 3.2;
    case "ten":
      return 0.1;
    case "five":
      return 0.05;
    default:
      return 0;
  }
};
const checkInputs = () => {
  if (numberOfPeople.value !== "" && amount.value !== "") return true;
  else return false;
};
btn.addEventListener("click", () => {
  outputAmount.textContent = "";
  if (checkInputs()) {
    const tipPercentage = document.querySelector("#percentage-select").value;
    const calculatedValue =
      (+amount.value * optionNameToNumber(tipPercentage)) /
      +numberOfPeople.value;
    outputAmount.textContent = calculatedValue.toFixed(2) + "PLN";
  } else {
    output.innerHTML = "<h3>Nie podałeś wszystkich wartości!!</h3>";
  }
  output.style.visibility = "visible";
});
