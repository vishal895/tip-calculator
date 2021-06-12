function calculateTip(){
  var billAmt = Number(document.getElementById("billamt").value);
  var serviceQual = Number(document.getElementById("serviceQual").value);
  var numofpeople = Number(document.getElementById("peopleamt").value);



  if (billAmt==="" || serviceQual==0)  {
  	alert("please enter values");
      return;
  }
    //check to see if this input is empty  or less then or equal to 1
  if (numofpeople === "" || numofpeople <= 1) {
      numofpeople = 1;
      document.getElementById("each").style.display ="none";
    } else {
  	document.getElementById("each").style.display ="block";
  }

    //calculate tip
    var total =(billAmt * serviceQual) / numofpeople;
    // console.log(total);
    //round to two decimal places
    total = Math.round(total);
      // Display the tip
    document.getElementById("totalTip").style.display = "blocks";
    document.getElementById("tip").innerHTML = total ;

}
