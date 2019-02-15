function stoppedTyping(){
    if(this.length < 0) {
        document.getElementById('submitButton').disabled = true;
      } else {
        document.getElementById('submitButton').disabled = false;
      }
    };

function trackButton(){
  var A=parseFloat(document.getElementById("sideA").value);
  var B=parseFloat(document.getElementById("sideB").value);
  var C=parseFloat(document.getElementById("sideC").value);

  if((A+B)<=C || (B+C)<=A || (C+A)<=B){
      document.getElementById('answerHere').innerHTML="This is not a triangle";
    }else if ((A===B) && (B===C) && (C===A)){
      document.getElementById('answerHere').innerHTML="This is an equilateral triangle";
    } else if ((A===B) || (B===C) || (C===B)) {
      document.getElementById('answerHere').innerHTML="This is an isoceles triangle";
    }else if ((A!==B) && (B!==C) && (C!==A)) {
      document.getElementById('answerHere').innerHTML="This is a scalene triangle";
    }else{
      document.getElementById('answerHere').innerHTML="Enter the values";
    }
 };
