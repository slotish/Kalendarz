<div <?echo "id=\"dayPlate".$_GET["id"]."\"";?> class="input-row form">
    <label class="paddingleft">
        <select name="day" class="dayForm">
        <?
        for ($i = 1 ; $i < 32 ; $i++){
            echo "<option value=\"".$i."\">".$i."</option>";
        } 
        ?>
        </select>
    </label>
    <label class="paddingleft sizeForm">
        <select name="font">
            <option>mała</option>
            <option>średnia</option>
            <option>duża</option>
        </select>
    </label>
    <label class="paddingleft">
        <input type="color" name="favcolor" value="#000000">
    </label>
    <textarea <?echo "id=\"dayPlateTextArea".$_GET["id"]."\"";?> class="form-control textarea" rows="2"></textarea>&nbsp;
</div>