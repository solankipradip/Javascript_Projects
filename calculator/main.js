
let display = document.getElementById("inputDisplay");
let buttons = document.querySelectorAll("button");
let currentValue = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnValue = btn.getAttribute("value");

        if (btnValue === " ") {
            currentValue = "";
        } else if (btnValue === "=") {
            try {
                currentValue = eval(currentValue).toString();
            } catch {
                currentValue = "Error";
            }
        } else {
            currentValue += btnValue;
        }

        display.value = currentValue;
    });
});
