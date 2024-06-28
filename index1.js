let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      if (
        screenValue.includes("sin") ||
        screenValue.includes("cos") ||
        screenValue.includes("tan")
      ) {
        let opr = screenValue.split("(")[0];
        console.log(opr);
        if (opr == "sin") {
          screenValue = Math.sin(
            toRadians(parseInt(screenValue.replace(`${opr}(`, "")))
          );
        } else if (opr == "cos") {
          console.log("We are in cos");
          screenValue = Math.cos(
            toRadians(parseInt(screenValue.replace(`${opr}(`, "")))
          );
          console.log(screenValue);
        } else if (opr == "tan") {
          screenValue = Math.tan(
            toRadians(parseInt(screenValue.replace(`${opr}(`, "")))
          );
        }
        screen.value = screenValue.toFixed(3);
      } else {
        try {
          screen.value = eval(screenValue);
          screenValue = screen.value;
        } catch (e) {
          screen.value = "Error";
          screenValue = "";
        }
      }
    } else if (buttonText == "DEL") {
      screenValue = screenValue.substring(0, screenValue.length - 1);
      screen.value = screenValue;
    } else if (buttonText == "%") {
      screenValue = (parseInt(screenValue) / 10).toString();
      screen.value = screenValue;
    } else if (buttonText == "sin") {
      screenValue += "sin(";
      screen.value += screenValue;
    } else if (buttonText == "cos") {
      screenValue += "cos(";
      screen.value += screenValue;
    } else if (buttonText == "tan") {
      screenValue += "tan(";
      screen.value += screenValue;
    } else if (buttonText == "log") {
      screenValue = Math.log10(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } else if (buttonText == "ln") {
      screenValue = Math.log(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } else if (buttonText == "√") {
      screenValue = Math.sqrt(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } else if (buttonText == "π") {
      screenValue += Math.PI.toString();
      screen.value = screenValue;
    } else if (buttonText == "exp") {
      screenValue = Math.exp(parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } else if (buttonText == "1/x") {
      screenValue = (1 / parseFloat(screenValue)).toString();
      screen.value = screenValue;
    } else if (buttonText == "x!") {
      screenValue = factorial(parseInt(screenValue)).toString();
      screen.value = screenValue;
    } else if (buttonText == "mod") {
      screenValue += "%";
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
