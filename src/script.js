document.addEventListener('DOMContentLoaded', function() {
            
    // js runs when the html page is ready
    
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    let currentValue = "";


    function evaluateResult(){
        console.log('currentValue:', currentValue);
        const convertedOperator = currentValue.replace("x", "*").replace("÷", "/").replace("%", "*0.01")
        const result = eval(convertedOperator);
        currentValue = result.toString();
        display.value = currentValue;
        console.log(convertedOperator)
    }
    

  for(let i = 0; i < buttons.length; i++){
    const button = buttons[i];
    button.addEventListener('click', function() {
    const value = button.innerText;

     if(value == "AC"){
        currentValue = "";
        display.value = currentValue;
     }
     else if(value == "="){
       evaluateResult();
        
     }
     else{
        currentValue += value;
        display.value = currentValue;
     }
     
        
    })
  }
  
   
});