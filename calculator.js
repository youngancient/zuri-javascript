function calculator() {
  let firstNo = window.prompt("enter first number: ");
  let operation = window.prompt("what operation? *+-/% : ");
  let secondNo = window.prompt("enter second number: ");
  let output = op(operation, firstNo,secondNo);
  if(output){
      alert(`${firstNo} ${operation} ${secondNo} = ${output}`);
  }else{
    alert("Invalid Inputs");
  }
}
function op(aString, one, two) {
  if (aString == "*") {
    return one * two;
  } else if (aString == "+") {
    return one + two;
  } else if (aString == "-") {
    return one - two;
  } else if (aString == "/") {
    return one / two;
  } else if(aString == "%"){
    return one % two;
  }else{
    return false;
  }
}
calculator();
