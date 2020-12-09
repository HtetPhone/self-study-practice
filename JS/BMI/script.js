//for Kilo and meter
var kilo = document.getElementById('kilo');
var meter = document.getElementById('meter');
var result;
function bmi(){
  result = parseInt(kilo.value/Math.pow(meter.value,2));
  showMsg();
}
function refresh(){
  kilo.value = " ";
  meter.value= " ";
}

//for pound and inch
var pound = document.getElementById('pound');
var inch = document.getElementById('inch');
function bmiOne(){
  result = parseInt((pound.value/Math.pow(inch.value,2))*703);
  showMsg();
}
function refreshOne(){
  pound.value = " ";
  inch.value= " ";
}

function showMsg(){
  if(result < 18){
    alert(`Your BMI is ${result}, an underweight!`);
  }else if (result >= 18 && result < 24) {
    alert(`Your BMI is ${result}, normal!`);
  }else if (result >= 24 && result < 29) {
    alert(`Your BMI is ${result}, an overweight!`);
  }else if (result >= 29) {
    alert(`Your BMI is ${result}, an obese!`);
  }
}
// function noData(){
//   if(kilo.value = " " && meter.value= " "){
//     alert("Plz fill the data!");
//   }
// }
