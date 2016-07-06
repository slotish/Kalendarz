<?
function userDataUnSerialize($data){
	$result = "Dane użytkownika:\n";
	$result .= "\tPrzesuniecie poziome:".$data["offsetX"];

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