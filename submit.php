<?
function userDataUnSerialize($data){
	
	$result = "Dane użytkownika:\n";
	$result .= "\nPrzesuniecie poziome:".$data["offsetX"];
	$result .= "\nPrzesuniecie pionowe:".$data["offsetY"];
	$result .= "\nObrót:".$data["rotate"];
	$result .= "\nSzerokość:".$data["width"];
	$result .= "\nWysokość:".$data["height"];
	//$result .= "\nDni kalendarza:".$data['addCommentedDays'];
	//$result .= "\nKolor kroju pisma:".$data['color'];
	//$result .= "\nKomentarz:".$data['textareaComment'];

	$days = explode(",", $data['addCommentedDays']);
	$colors = explode(",", $data['color'] );
	$comments = explode(",",$data['textareaComment']);
	$result .= "\nDni kalendarza:\n";
	// WARNING: to -1 może byc przyczyną problemów w przyszłości!
	for ($x=0; $x<count($days)-1; $x++){
		$result .= "\t Dzień:".$days[$x]."\n";
		$result .= "\t Kolor:".$colors[$x]."\n";
		$result .= "\t Komentarz:".str_replace("/comma/",",",$comments[$x])."\n";
	}

	return $result;
}

session_start();
var_dump($_SESSION);
if (!file_exists("uploads/".session_id()) && !mkdir("uploads/".session_id())) {
    die('Failed to create folders...'.session_id());
}
chmod("uploads/".session_id(), 0777);
var_dump($_POST);
$file = "uploads/".session_id()."/user_data.txt";
file_put_contents($file, userDataUnSerialize($_POST));

?>