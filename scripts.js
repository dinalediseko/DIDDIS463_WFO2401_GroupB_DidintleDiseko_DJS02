const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (isNaN(dividend) || isNaN(divider)) {
    // Scenario: Providing anything that is not a number should crash the program
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input provided. Both values must be numbers.");
    return;
  }

  if (dividend === "" || divider === "") {
    // Scenario: Validation when values are missing
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    console.error("One or both input values are missing.");
    return;
  }

  if (divider == 0) {
    // Scenario: An invalid division should log an error in the console
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error.");
    return;
  }

// Perform the division
const divisionResult = dividend / divider;

// Check if the division result is a whole number
if (divisionResult % 1 === 0) {
  // Scenario: Dividing numbers result in a whole number
  result.innerText = divisionResult;
} else {
  // Scenario: Dividing numbers result in a decimal number
  result.innerText = Math.floor(divisionResult); // Round down to nearest whole number
}
});