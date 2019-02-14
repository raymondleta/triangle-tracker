var triangleType = function(){
  var sides= parse(document.getElementById('sides').value);
  var equal= parseInt(document.getElementById('equal').value);

  var output= document.write('output');

  if(isNaN(sides)&& isNaN(equal)){
    alert ("Please enter a number!")
  } else if(sides == 3 && equal == 3); {
    alert("This is an equilateral triangle");
  } else if (sides == 3 && equal == 3); {
    alert("This is an isoceles triangle");
  } else if (sides ==3 && equal == 0);{
    alert("This is an scalene triangle");
  } else{
    alert("This is not a triangle");
  }
};
