<?
session_start();
?>

<!DOCTYPE html>

<html class="mouseClass">

<head>
    <meta charset="UTF-8">
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
    <!-- NO FOLLOW NO INDEX !!!!!!!!!!!!!!!!!!!!!!!!!!! -->
    <title></title>
    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.theme.min.css">
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.structure.min.css">
    <!-- Scripts -->

    <!-- próbne
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript" src="jqueryrotate.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
  <SCRIPT TYPE="text/javascript" SRC="site.js"></SCRIPT>
-->

    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>

<body class="mouseClass">
    <!-- Nagłówek -->
    <div class="row send">
        <div class="col-md-4">
          <input type="button" id="saveData" onclick="saveData()" value="Zapisz">
          <input type="button" id="sendData" onclick="sendData()" value="Wyślij">
        </div>
        <div class="col-md-6">
            <h2> Prześlij zdjęcia: </h2>
        </div>
        <div class="col-md-2">
            <div class="form-group">
                <label for="InputFile">
                    <p>Styczeń</p>
                </label>
                  <form id="getImage" enctype="multipart/form-data">
                    <input class="f" type="file" name="fileToUpload" id="fileToUpload">
                  </form>
                <br>
            </div>
        </div>
    </div>
    <!-- FORMULARZ -->
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- Toolbar -->
                <div class="toolbar">
                    <table>
                        <tr>
                            <td>
                                <img src="images/move.png" id="button1" class="img-responsive toolbox  center-block firstButton" onclick="clickedButton(1)">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/scale.png" id="button2" class="img-responsive toolbox   center-block thirdButton" onclick="clickedButton(2)">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/rotateright.png" id="button3" class="img-responsive toolbox   center-block secondButton" onclick="currentPage.rotateRight(45)">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/rotate.png" id="button4" class="img-responsive toolbox   center-block secondButton" onclick="currentPage.rotateLeft(-45)">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="images/reset.png" id="button5" class="img-responsive toolbox   center-block fourthButton" onclick="currentPage.switchOffTools()">
                            </td>
                        </tr>
                    </table>
                    <!-- Toolbar KONIEC -->
                </div>
            </div>
        </div>
    </div>
    <div class="calendar">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6 center-block">
                    <div class="content">
                        <div class="overflow">
                            <img id="i" draggable="false" src="images/melancolia.jpg" class="img-responsive center-block photo  layer2 position">
                            <img src="images/stronakalendarz.png" draggable="false" class="img-responsive  center-block layer1" alt="Responsive image">
                            <img src="images/stronakalendarz.png" draggable="false" class="img-responsive  center-block layer3" alt="Responsive image">
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <img src="images/plus.png" class="addform" onclick="addDayPlate()">
                      <div id="addedForm">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<script type="text/javascript" src="jquery2.1.4.min.js"></script>
<script type="text/javascript" src="jqueryrotate.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<SCRIPT TYPE="text/javascript" SRC="site.js"></SCRIPT>

</html>