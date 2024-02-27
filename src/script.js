document.addEventListener('DOMContentLoaded', function () {

  // js runs when the html page is ready

  const display = document.getElementById('calc-display');
  const buttons = document.getElementsByClassName('btn');
  const advancedButtons = document.getElementsByClassName('advanced');
  const sum = document.querySelector('.sum');

  let currentValue = "0";
  display.value = "0"
  let prevResult = "";

  function evaluateResult() {

    const convertedOperator =
      currentValue.replace("x", "*")
        .replace("÷", "/")
        .replace("%", "*0.01")
        .replace("sin", "Math.sin")
        .replace("cos", "Math.cos")
        .replace("ln", "Math.log")
        .replace("π", "Math.PI")
        .replace("log", "Math.log10")
        .replace("e", "Math.e")
        .replace("tan", "Math.tan")
        .replace("√", "Math.sqrt")
    prevResult = currentValue + "=";



    const result = eval(convertedOperator);
    currentValue = result.toString();
    display.value = currentValue;
  }


  function changeDisplayFunc() {
    for (let i = 0; i < advancedButtons.length; i++) {
      const divRow = advancedButtons[i]
      if (divRow.style.display === "none") {
        divRow.style.display = "flex";
      } else {
        divRow.style.display = "none";
      }
    }
  }


  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
      const value = button.innerText;
      try {
        if (value === "AC") {
          currentValue = "0";
        }
        else if (value === "c") {
          if (currentValue === "0") {
            return;
          }
          else {
            if (currentValue.length > "1") {
              const newArr = currentValue.split("");
              newArr.splice(-1, 1);
              currentValue = newArr.join("");
              display.value = currentValue;
            } else{
              currentValue = "0";
              display.value = currentValue;
            }
         }
        }
        else if (value === "=") {
          evaluateResult();
        }
        else if (value === "fx") {
          changeDisplayFunc();
        }
        else if (currentValue === "0" && value === "0") {
          return;
        }
        else if (currentValue === "0" && value !== "0") {
          currentValue = value;
        }
        else {
          currentValue += value;
        }
        display.value = currentValue;
      } catch (error) {
        console.log(error);
        currentValue = "ERROR";
        display.value = currentValue;

        setTimeout(function () {
          currentValue = "0";
          display.value = "0";
        }, 2000);
      }
    })
  }
})
