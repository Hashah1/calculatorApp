function handleTrig(e){
    console.log("In handleTrig function");
    e = eval(e);

    let result;
    let operator = document.querySelector("#adv_operator").value;
    // Decide operation to do based on the operator selected
    switch(operator)
    {
        case "sin":
        {
            result = Math.sin(e);
            break;
        }
        case "cos":
        {
            result = Math.cos(e);
            break;
        }
        case "tan": 
        {
            result = Math.tan(e);
            break;
        }
    }
    console.log(result);

    display(result);
}

function calc(e){
    console.log("In calc function");
    let result = eval(e);
    
    console.log(result);

    display(result);
}

function display(result){     
    document.querySelector("#result").innerHTML = result;
    console.log("Result is: " + result);
}