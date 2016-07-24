$(document).ready(function() {

    loadPhoto();
    initPage();
    initTextarea();

});




var kalendar = []
var currentPage;



function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }
    // Use event.pageX / event.pageY here
    currentPage.setMousePosition(event.pageX, event.pageY);
};
var writing = false;
function initPage() {

for(var i = 0 ; i < 12 ; i++){
kalendar[i] = new Page();
}
    currentPage = kalendar[0];

    currentPage.addTool(new MoveTool(), 1);
    currentPage.addTool(new RotateTool(), 3);
    currentPage.addTool(new ResizeTool(), 2);

    setInterval(function() {
        currentPage.frame()
    }, 10);
    document.onmousedown = function() {
        currentPage.activateTool();
    };
    document.onmouseup = function() {
        currentPage.deactivateTool();
    };

    document.onmousemove = handleMouseMove;

    document.onkeydown = function(e) {
        if (writing) return;
        switch (e.keyCode) {
            case 17:
                currentPage.modifier = true;
                break;
            case 81:
                currentPage.image.reset();
                var abstractValue = Math.abs(currentPage.rotation);
                if (currentPage.rotation > 0){
                    currentPage.rotate(-abstractValue);
                }else if (currentPage.rotation < 0){
                    currentPage.rotate(abstractValue);
                }else {
                    break;
                }
                break;
            case 88:
                if (currentPage.buttonFlag){
                    currentPage.rotateRight(1);
                }
                break;
            case 90:
                if (currentPage.buttonFlag){
                    currentPage.rotateLeft(-1);
                }
                break;
        }
    };

    document.onkeyup = function(e) {
        if (writing) return;
        switch (e.keyCode) {
            case 17:
                currentPage.modifier = false;
                break;
         
        }
    };

    currentPage.setImage();

}

function initTextarea(){

    
    $("textarea").on("focus", function(){
        writing = true;
    });

    $("textarea").on("focusout", function(){
        writing = false;
    });



}

function clickedButton(n) {
   

    borderStyle = "2px solid #FF0C02";
    button = "button" + n;
    function border() {
        document.getElementById(button).style.border = borderStyle;
    }
    function noBorder() {
        document.getElementById(button).style.border = "";
    }

    function hideBorder(){
        setTimeout(function(){
            noBorder()
        },500);
    }


        for (var i = 1; i <= 5; i++) {
            var tmp = "button" + i;
            document.getElementById(tmp).style.border = "";
    } 

    if (n == 1) {
        $('.mouseClass').each(function() {
            this.style.setProperty('cursor', 'url("images/movemouse.png"), pointer', 'important');
        });
        border()
    }

    if (n == 2) {


        $('.mouseClass').each(function() {
            this.style.setProperty('cursor', 'url("images/scalemouse.png"), pointer', 'important');
        });
        border();
    }

    if (n == 3) {
        $('.mouseClass').each(function() {
            this.style.setProperty('cursor', 'default', 'important');
        });
        border();
        hideBorder();
    }

    if (n == 4) {
        $('.mouseClass').each(function() {
            this.style.setProperty('cursor', 'default', 'important');
        });
        border();
        hideBorder();

    }

    if (n == 5) {
        $('.mouseClass').each(function() {
            this.style.setProperty('cursor', 'default', 'important');
        });
        border();
        hideBorder();

    }

    currentPage.selectTool(n);
};

function loadPhoto() {
    $('.f').on('change', function(ev) {
        var f = ev.target.files[0];
        var fr = new FileReader();
        fr.onload = function(ev2) {
            console.dir(ev2);
            $('#i').attr('src', ev2.target.result);
        };
        fr.readAsDataURL(f);
    });


}




function moveImage(_x, _y) {

    var imageOffset = $(".photo").offset();
    $(".photo").offset({
        top: imageOffset.top + _y,
        left: imageOffset.left + _x
    });

}

function resizeImage(_x, _y) {
    
        var width = $(".photo").width() + _x;
        var height = $(".photo").height() + _y;
        if (currentPage.modifier){
            width = height * currentPage.image.ratio;
        }
        $(".photo").width(width);
        $(".photo").height(height);
}

function checkImageClick(p, q) {

    var a = $("#i").width();
    var b = $("#i").height();
    var c = $("#i").offset().left;
    var d = $("#i").offset().top;

    console.log("Obrazek:" + " " + c + " " + d + "Wektor obrazka:" + a + " " + b);

    if (p > c && p < (c + a) && q > d && q < (d + b)) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }


}

function Image(){
	
    this.picturePosition = $("#i").offset()
    
    this.originalWidth = $(".photo").width();
    this.originalHeight = $(".photo").height();
    this.ratio = this.originalWidth / this.originalHeight;
    this.reset = function(){
        $(".photo").width(this.originalWidth);
        $(".photo").height(this.originalHeight);
        $(".photo").offset({
        top: this.picturePosition.top,
        left: this.picturePosition.left
    });
    }
}

var resetImageData = new Image();

function Page() {

    this.selectedTool = undefined;
    var toolActivated = false;
    this.tools = [];
    this.cursor = {
        x: 0,
        y: 0,
    };
    this.image = {};
    this.modifier = false;
    this.rotation = 0;
    this.formNumbers = 1;
    this.buttonFlag = true;


    this.frame = function() {
        if (this.selectedTool != undefined && this.toolActivated) {
            this.selectedTool.frame();
        }
    };

    this.startFrame = function() {
        if (this.selectedTool != undefined) {
            this.selectedTool.startFrame();
        };
    };

    this.endFrame = function() {
        if (this.selectedTool != undefined) {
            this.selectedTool.endFrame();
        };
    };


    this.activateTool = function() {
        if (checkImageClick(this.cursor.x, this.cursor.y)) {
            this.toolActivated = true;
            this.startFrame();
        }
    }

    this.deactivateTool = function() {
        if (this.toolActivated) {
            this.toolActivated = false;
            this.endFrame();
        }
    }

    this.setMousePosition = function(x, y) {

        this.cursor.x = x;
        this.cursor.y = y;
        if (this.selectedTool != undefined) {
            this.selectedTool.setMousePosition(x, y);
        };
    };

    this.addTool = function(tool, id) {

        this.tools[id] = tool;

    };

    this.selectTool = function(toolid) {
        this.selectedTool = this.tools[toolid];

    }

   this.setImage = function(){
        this.image = new Image();
   }

   this.switchOffTools = function(){
        this.selectedTool = undefined;
        $('.mouseClass').each(function() {
            this.style.setProperty('cursor', 'default', 'important');
        });
        clickedButton(5);
   }

   this.rotateRight = function(n){
        this.rotation += n;
        $('#i').rotate(this.rotation);
        clickedButton(3);
   }

   this.rotateLeft = function(n){
        this.rotation += n;
        $('#i').rotate(this.rotation);
        clickedButton(4);
   }

   this.rotate = function(n){
        this.rotation += n;
        $('#i').rotate(this.rotation);
   }

   this.changeButtonFlag = function(){
        $( ".textarea" ).change(function() {
             this.buttonFlag = false;
             console.log(this.buttonFlag);
        });
   }

   this.serializedData = {};

   this.save = function(){
   		this.serializedData = this.serialize();
   }

   this.serialize = function(){
        return {
            offsetX: $("#i").offset().left,
            offsetY: $("#i").offset().top,
            rotate: currentPage.rotation,
            width: $(".photo").width(),
            height: $(".photo").height(),
            addCommentedDays: function(){
            	var tab = [];
            	for (i=1; i <= currentPage.formNumbers; i++){
            		tmp = "#dayFormPlate" + i;
            		tab.push($(tmp).val());
            		
            	}
            	return tab;
            },
            color: function(){
                var tab = [];
                for (i=1; i <= currentPage.formNumbers; i++){
                    tmp = "#colorFormPlate" + i;
                    tab.push($(tmp).val());
                    
                }
                return tab;
            },
            textareaComment: function(){
            	var tab = [];
                for (i=1; i <= currentPage.formNumbers; i++){
                    tmp = "#dayPlateTextArea" + i;
                    if ($(tmp).val() == undefined){
                    	continue ;
                    }
                    tab.push($(tmp).val().replace(",","/comma/"));
                    
                }
                return tab;
            }

                };
           }
        }


function Tool() {
    this.cursor = {
        x: 0,
        y: 0,
    }
    this.startFrame = function() {};
    this.frame = function() {};
    this.endFrame = function() {};
    this.setMousePosition = function(x, y) {
        this.cursor.x = x;
        this.cursor.y = y;
    }
}

function RotateTool() {
    Tool.call(this);
    this.startFrame = function() {
        console.log("RotateTool startFrame");
    };
    this.frame = function() {
        console.log("RotateTool frame");
    };
    this.endFrame = function() {
        console.log("RotateTool endFrame");
    };

}

function MoveTool() {
    Tool.call(this);
    this.prevPos = {
        x: 0,
        y: 0
    }
    this.startFrame = function() {
        this.prevPos = {
            x: this.cursor.x,
            y: this.cursor.y
        };
        console.log("MoveTool startFrame");
    };
    this.frame = function() {
        var vec = {
            x: this.cursor.x - this.prevPos.x,
            y: this.cursor.y - this.prevPos.y
        };
        moveImage(vec.x, vec.y);
        console.log(vec);
        this.prevPos = {
            x: this.cursor.x,
            y: this.cursor.y
        }
    };
    this.endFrame = function() {
        console.log("MoveTool endFrame");
    };


}


function ResizeTool() {
    Tool.call(this);
    this.prevPos = {
        x: 0,
        y: 0
    }
    this.startFrame = function() {
        console.log("ResizeTool startFrame");
        this.prevPos = {
            x: this.cursor.x,
            y: this.cursor.y
        };
    };
    this.frame = function() {
        var vec = {
            x: this.cursor.x - this.prevPos.x,
            y: this.cursor.y - this.prevPos.y
        };
        console.log("ResizeTool frame");
        resizeImage(vec.x, vec.y);
        console.log(vec);
        this.prevPos = {
            x: this.cursor.x,
            y: this.cursor.y
        }
    };
    this.endFrame = function() {
        console.log("ResizeTool endFrame");
    };

}

function addDayPlate() {
    $.get("newDayPlate.php",{id:currentPage.formNumbers}).done(function(data){
        var $newPlate = $(data);
        $newPlate.on("load", function(){alert("dzia\n\n\n")});
        /*$newPlate.on("focus", function(){
            writing = true;
        });
        $newPlate.on("focusout", function(){
            writing = false;
        });*/
        $("#addedForm").append($newPlate);
    });
    initTextarea(currentPage.formNumbers);
    currentPage.formNumbers++;
}


function sendData(){
	currentPage.save();
	$.post( "submit.php", currentPage.serializedData)
        .done(function( data ) {
            alert( "Data Loaded: " + data );
			var formData = new FormData($('#getImage')[0]);
			    $.ajax({
			        url: 'upload.php',  //Server script to process data
			        type: 'POST',
			        data: formData,
			        cache: false,
			        contentType: false,
			        processData: false

			    });
    });
    /*var formData = new FormData($('#getImage')[0]);
    $.ajax({
        url: 'upload.php',  //Server script to process data
        type: 'POST',
        success: function(){
            $.post( "submit.php", currentPage.serialize())
                .done(function( data ) {
                    alert( "Data Loaded: " + data );
            });},
        data: formData,
        cache: false,
        contentType: false,
        processData: false

    });
*/
    
}

function saveData(){
    //sendImage();
}

function cleanData(){
  currentPage.save();
  var tmp = Math.abs(currentPage.rotation);
  currentPage.rotate(tmp);
  currentPage.rotation = 0;
  resetImageData.reset();
  for (var i=1; i<=currentPage.formNumbers; i++){
  		$("#dayPlate" + i).remove();
  }
  $("#cleanData").prop('disabled', true);
}

function loadData(){
	$("#cleanData").prop('disabled', false);
}

function sendImage(){
    var formData = new FormData($('#getImage')[0]);
    $.ajax({
        url: 'upload.php',  //Server script to process data
        type: 'POST',
        /*xhr: function() {  // Custom XMLHttpRequest
            var myXhr = $.ajaxSettings.xhr();
            if(myXhr.upload){ // Check if upload property exists
                myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
            }
            return myXhr;
        },*/
        //Ajax events
        //beforeSend: beforeSendHandler,
        //success: completeHandler,
        //error: errorHandler,
        // Form data
        data: formData,
        //Options to tell jQuery not to process data or worry about content-type.
        cache: false,
        contentType: false,
        processData: false
    });
}




/*
for (var i = 0 ; i < 1000 ; i++){
    if (Math.random() < 0.1){
        page1.endFrame();
        page1.selectTool(Math.floor(Math.random()*3)+1);
        page1.startFrame();
    }
    page1.frame();
}

*/


// Wyczyść stronę onclick a potem spraw aby na podstawie danych z Current Page sie ustawiła !  Nie obijaj się !
// Clean i Load!