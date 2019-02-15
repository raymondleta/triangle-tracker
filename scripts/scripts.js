function trackButton(){
  var A=parseInt(document.getElementById("sideA").value);
  var B=parseInt(document.getElementById("sideB").value);
  var C=parseInt(document.getElementById("sideC").value);
  // console.log(A);


    // if((A+B)<=C || (A+C)<=B || (B+C)<=A){
    //   document.getElementById('answerHere').innerHTML="This is not a triangle";
    // }else if (A===B!==C || A!==B===C || A!==C===B) {
    //   document.getElementById('answerHere').innerHTML="This is an isoceles triangle";
    // }else if (A===B===C || A===C===B) {
    //   document.getElementById('answerHere').innerHTML="This is an equilateral triangle";
    // }else if (A!==B!==C || A!==C!==B) {
    //   document.getElementById('answerHere').innerHTML="This is a scalene triangle";
    // }else {
    //   document.getElementById('answerHere').innerHTML="Please enter values";
    // }

    if((A===B) && (B===C) && (C===A)){
      document.getElementById('answerHere').innerHTML="This is an equilateral triangle";
    } else if ((A===B) || (B===C) || (C===B)) {
      document.getElementById('answerHere').innerHTML="This is an isoceles triangle";
    }else if ((A!==B) && (B!==C) && (C!==A)) {
      document.getElementById('answerHere').innerHTML="This is a scalene triangle";
    }else if ((A===NaN) || (B===NaN) || (C===NaN)) {
      document.getElementById('answerHere').innerHTML="Please enter values";
    }
 };
