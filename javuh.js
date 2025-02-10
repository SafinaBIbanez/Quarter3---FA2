//hahahahahappy monday maam


//yeayy calculateee
function calculate(operation) 
{
    //get the numbas
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultText = "";

    //WOOO IF MY BELOVED<33
    if (isNaN(num1) || isNaN(num2)) 
    {
        resultText = "Please enter valid numbers.";
    } 
    else 
    {
        switch (operation) 
        {
            //CALCULATEEE
            case '+': resultText = `The sum of ${num1} and ${num2} is ${num1 + num2}.`; break;
            case '-': resultText = `The difference of ${num1} and ${num2} is ${num1 - num2}.`; break;
            case '*': resultText = `The product of ${num1} and ${num2} is ${num1 * num2}.`; break;
            case '/': resultText = num2 !== 0 ? `The quotient of ${num1} and ${num2} is ${num1 / num2}.` : "Cannot divide by zero."; break;
            case '%': resultText = num2 !== 0 ? `The remainder of ${num1} divided by ${num2} is ${num1 % num2}.` : "Cannot divide by zero."; break;
            default: resultText = "Invalid operation.";
        }
    }
    document.getElementById("result").innerText = resultText;
}