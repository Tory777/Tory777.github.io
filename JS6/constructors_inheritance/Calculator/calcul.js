  btn.onclick = function() {
      function Calc(a, operator, b){
        if (operator === '+'){
          return a + b;}
        else if (operator === '-'){
          return a - b;}
        else if (operator === '*'){
          return a * b;}
        else if (operator === '/'){
          return a / b;}
        else if (operator === '**'){
          return Math.pow(a, b);}
        else{alert('I do not know such operation')
        }
      }

      var split = str.value.split(' '),
        firstNum = + split[0],
        operator =   split[1],
        secondNum = + split[2]

    if (isNaN(firstNum) || isNaN(secondNum)){
          alert('Put numbers!')}
    alert (Calc(firstNum, operator, secondNum));

  };
