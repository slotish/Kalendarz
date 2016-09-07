<?

$fromID = 0;
$count = 0;
$selected = array();

if  (array_key_exists ( "group", $_POST ) ) {
    $fromID = 1;
    if  (array_key_exists ( "days", $_POST ) ){
        $count = count($_POST["days"]);
        for ($x=0; $x<$count; $x++){
            $selected[$x] = array("day"=>$_POST["days"][$x], "color" => $_POST["colors"][$x], "comment" => $_POST["comments"][$x]);
        }
    }
} elseif  (!array_key_exists ( "id", $_GET ) ) {
    echo "Missing data";
    die;
} else {
    $fromID = filter_var($_GET["id"], FILTER_SANITIZE_STRING);
    $count = 1;
    $selected[0] = array("day"=>1, "color" => "#000000", "comment" => "");
}

//$safe_id = filter_var($_GET["id"], FILTER_SANITIZE_STRING);

for ($x=0; $x<$count; $x++){
    ?>
    
        <div class="this_form"  <?echo "id=\"dayPlate".$fromID."\"";?> class="input-row form">
            <label class="paddingleft">
                <select <?echo "id=\"dayFormPlate".$fromID."\"";?> name="day" class="dayForm">
                <?
                for ($i = 1 ; $i < 32 ; $i++){
                    echo "<option value=\"".$i."\" ".(($i == $selected[$x]["day"])?"selected":"").">".$i."</option>";
                } 
                ?>
                </select>
            </label>
            <label class="paddingleft">
                <input type="color" <?echo "id=\"colorFormPlate".$fromID."\"";?> name="favcolor" value=<?=$selected[$x]["color"];?>>
            </label>
            <label class="paddingleft">
                <span class="glyphicon glyphicon-remove"  onclick="removeDayPlate(<?=$fromID?>);" aria-hidden="true"></span>
            </label>
            <textarea maxlength="15" placeholder="maksymalnie 15 znaków :)"<?echo "id=\"dayPlateTextArea".$fromID."\"";?> class="form-control textarea" rows="2"><?=$selected[$x]["comment"];?></textarea>&nbsp;
        </div>
   
  
<?
++$fromID;
}

?>