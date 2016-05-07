function getref()
{
	if(document.referrer=="")
	{	// No referrer data found
		return;
		}

  var a=document.referrer;
  
  //saves the referrer to referrer.txt using saveref.php script
  $.post("saveref.php",{ref:a}, function(result){  
    });
  $.post();
  console.log(a);
}
