<?php
$rfrr ="\n".$_GET['ref'];
if($_GET['ref'])
{
file_put_contents("referrer.txt", rfrr . "\r\n", FILE_APPEND);
}
?>
