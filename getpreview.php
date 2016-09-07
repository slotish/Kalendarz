<?
session_start();

$month = intval($_GET["month"]);
$template = intval($_GET["template"]);
// Create the image
//$im: = imagecreatetruecolor(400, 30);
$templateImg = imagecreatefrompng("templates/".$template."/month_".$month.".png");
$userImg = imagecreatefrompng("uploads/".session_id()."/img_month_".$month.".png");
$userDataXml = simplexml_load_file("uploads/".session_id()."/user_data_".$month.".xml");
$resultImg = imagecreatetruecolor(imagesx($templateImg), imagesy($templateImg));
$white = imagecolorallocate($resultImg, 255, 255, 255);
imagefilledrectangle($resultImg, 0, 0, imagesx($templateImg)-1, imagesy($templateImg)-1, $white);
//$templateImg = $userImg;
imageAlphaBlending($templateImg, true);
imageSaveAlpha($templateImg, true);
imageAlphaBlending($resultImg, true);
imageSaveAlpha($resultImg, true);
imageAlphaBlending($userImg, true);
imageSaveAlpha($userImg, true);

//imagescale($userImg, intval($userDataXml->width["value"]), intval($userDataXml->height["value"]));
//imagecopy($resultImg, $userImg,  intval($userDataXml->offsetX["value"]) , intval($userDataXml->offsetY["value"]), 0, 0, imagesx($userImg), imagesy($userImg) );
imagecopy($resultImg, $userImg,  0,0, 0, 0, imagesx($userImg), imagesy($userImg) );
imagecopy($resultImg, $templateImg,  0, 0, 0, 0, imagesx($templateImg), imagesy($templateImg));
// // Create some colors
$grey = imagecolorallocate($resultImg, 128, 128, 128);
$black = imagecolorallocate($resultImg, 0, 0, 0);
//
// // The text to draw
$text = 'Testing...';
// // Replace path by your own font path
$font = 'OpenSans-Regular.ttf';
//
// // Add some shadow to the text
imagettftext($resultImg, 20, 0, 11, 21, $grey, $font, $text);
//
// // Add the text
imagettftext($resultImg, 20, 0, 100, 200, $black, $font, $text);
//
// // Using imagepng() results in clearer text compared with imagejpeg()
imagepng($resultImg, "testing.png");
imagedestroy($resultImg);
?>

<img alt="" src="testing.png"/>
