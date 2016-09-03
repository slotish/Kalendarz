<?
$month = intval($_GET["month"]);
// Create the image
//$im = imagecreatetruecolor(400, 30);
$img = imagecreatefrompng("images/stronakalendarz.png");
imageAlphaBlending($img, true);
imageSaveAlpha($img, true);
// // Create some colors
$white = imagecolorallocate($img, 255, 255, 255);
$grey = imagecolorallocate($img, 128, 128, 128);
$black = imagecolorallocate($img, 0, 0, 0);
//imagefilledrectangle($im, 0, 0, 399, 29, $white);
//
// // The text to draw
$text = 'Testing...';
// // Replace path by your own font path
$font = 'OpenSans-Regular.ttf';
//
// // Add some shadow to the text
imagettftext($img, 20, 0, 11, 21, $grey, $font, $text);
//
// // Add the text
imagettftext($img, 20, 0, 100, 200, $black, $font, $text);
//
// // Using imagepng() results in clearer text compared with imagejpeg()
imagepng($img, "testing.png");
imagedestroy($img);
?>

<img alt="" src="testing.png"/>
