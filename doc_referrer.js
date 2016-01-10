function 
{
  //gets the referrer url
  var b=Date();
  var a=document.referrer;
  a=b+" : "+a;

  //saves the referrer to referrer.txt using saveref.php script
  $.post("updatemark.php",ref:a);
}
