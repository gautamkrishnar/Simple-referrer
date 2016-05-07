<?php
$rfrr = date("h:i:sa")." ".date("d-m-Y")." : ".$_POST['ref'];
echo $rfrr;
if($_POST['ref'])
{
file_put_contents("referrer.txt", $rfrr . "\r\n", FILE_APPEND);
}
?>
