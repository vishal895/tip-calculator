//Calculate Tip
function calculateTip() {
  var billAmt = document.getElementById("billamt") .value;
  var serviceQual = document.getElementById("serviceQual") .value;
  var numofpeople =document.getElementById("peopleamt") .value;

  //validate input
  if (billAmt==="" || serviceQual==0)  {
	alert("please enter values");
    return;
  }
  //check to see if this input is empty  or less then or equal to 1
  if (numofpeople ==== "" || numofpeople <= 1) {
    numofpeople = 1;
    document.getElementById("each").style.display ="none";
  } else {
	document.getElementById("each").style.display ="block";
  }

  //calculate tip
  var total =(billAmt * serviceQual) / numofpeople;
  //round to two decimal places
  total = Math.round(total);
    // Display the tip
  document.getElementById("totalTip").style.display = "blocks";
  document.getElementById("tip").innerHTML = total ;

}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//click to call function
document.getElementById("calculate").oneclick = function() {
  calculateTip();
  
};  