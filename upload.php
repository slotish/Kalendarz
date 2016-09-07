<?php





session_start();
//var_dump($_FILES);
//echo "MONTH:".$_GET["month"]."file:".$_FILES["file"]["name"];
$target_dir = "uploads/".session_id()."/";
//$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$imageFileType = pathinfo(basename($_FILES["file"]["name"]) ,PATHINFO_EXTENSION);
$file_new_path = $target_dir."img_month_".intval($_GET["month"]);
$target_file = $file_new_path.".".$imageFileType;
$uploadOk = 1;
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["file"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

$allowedFileExtensions = array("jpg", "png", "jpeg");
$extensionOk = 0;
foreach ($allowedFileExtensions as $ext){
	if ($imageFileType == $ext){
		$extensionOk = 1;
	}
}
// Allow certain file formats
if($extensionOk == 0) {
    echo "Sorry, only JPG, JPEG, PNG files are allowed. Your is: ". $imageFileType;
    $uploadOk = 0;
}
// Check file size
if ($_FILES["file"]["size"] > 50000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
	foreach ($allowedFileExtensions as $ext){
		if (file_exists($file_new_path.".".$ext)){
			unlink($file_new_path.".".$ext);
		}
	}
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

































?>
