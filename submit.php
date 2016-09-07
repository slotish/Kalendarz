<?
function userDataUnSerialize($data){
	$xml = new SimpleXMLElement('<UserData/>');


	$node = $xml->addChild('offsetX');
	$node->addAttribute('name', 'Przesuniecie poziome');
	$node->addAttribute('value', $data["offsetX"]);

	$node = $xml->addChild('offsetY');
	$node->addAttribute('name', 'Przesuniecie pionowe');
	$node->addAttribute('value', $data["offsetY"]);

	$node = $xml->addChild('rotation');
	$node->addAttribute('name', 'Obrot');
	$node->addAttribute('value', $data["rotate"]);


	$node = $xml->addChild('width');
	$node->addAttribute('name', 'Szerokosc');
	$node->addAttribute('value', $data["width"]);

	$node = $xml->addChild('height');
	$node->addAttribute('name', 'Wysokosc');
	$node->addAttribute('value', $data["height"]);

	$days = $data['addCommentedDays'];
	$colors = $data['color'] ;
	$comments = $data['textareaComment'];
	$daysNode = $node->addChild("days");
	$daysNode->addAttribute("name", "Dni");
	for ($x=0; $x<count($days); $x++){
		$dayNode = $daysNode->AddChild("day");
		$dayNode->addAttribute("dayNumber", $days[$x]);
		$dayNode->addAttribute("color", $colors[$x]);
		$dayNode->addAttribute("comment", $comments[$x]);
		//$result .= "\t Dzień:".$days[$x]."\n";
		//$result .= "\t Kolor:".$colors[$x]."\n";
		//$result .= "\t Komentarz:".$comments[$x]."\n";
	}



	$dom = new DOMDocument("1.0");
	$dom->preserveWhiteSpace = false;
	$dom->formatOutput = true;
	$dom->loadXML($xml->asXML());
	
	return $dom->saveXML();

}

session_start();
var_dump($_SESSION);
if (!file_exists("uploads/".session_id()) && !mkdir("uploads/".session_id())) {
    die('Failed to create folders...'.session_id());
}
chmod("uploads/".session_id(), 0777);
var_dump($_POST);
$file = "uploads/".session_id()."/user_data_".intval($_GET["month"]).".xml";
//$rawDataFile = "uploads/".session_id()."/raw_user_data.txt";
file_put_contents($file, userDataUnSerialize($_POST));
//file_put_contents($rawDataFile, userDataUnSerialize($_POST));

?>
