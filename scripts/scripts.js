function stoppedTyping(){
    if(sideA.length === 0 || sideB.length===0 || sideC.length===0) {
        document.getElementById('submitButton').disabled = true;
      } else {
        document.getElementById('submitButton').disabled = false;
      }
    };


function trackButton(){
  var A=parseFloat(document.getElementById("sideA").value);
  var B=parseFloat(document.getElementById("sideB").value);
  var C=parseFloat(document.getElementById("sideC").value);

  var array1=["Not a triangle!","Equilateral triangle","Isoceles triangle","Scalene triangle","Enter the values"];

  if((A+B)<=C || (B+C)<=A || (C+A)<=B){
      document.getElementById('answerHere').innerHTML=array1[0];
    }else if ((A===B) && (B===C) && (C===A)){
      document.getElementById('answerHere').innerHTML=array1[1];
    } else if ((A===B) || (B===C) || (C===B)) {
      document.getElementById('answerHere').innerHTML=array1[2];
    }else if ((A!==B) && (B!==C) && (C!==A)) {
      document.getElementById('answerHere').innerHTML=array1[3];
    }else{
      document.getElementById('answerHere').innerHTML=array1[4];
    }
 };
