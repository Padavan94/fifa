
//onResize
$(document).resize(function() {
    footDown();
});

function forSVG(){
    $('.my_svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
    });}
function footDown(){
    var FOOTER_HEIGHT = 292;
    var footerHeight = $("footer").outerHeight();
    var windowHeight = window.innerHeight;
    var headPlusFoot = $("header").outerHeight()+footerHeight;
    var bodyHeight = $("body").outerHeight();

    if(windowHeight>bodyHeight){
        $("footer").css({"position":"absolute","bottom":"0px", "width":"100%"});
        $(".body-wrapper, .body-wrapper2, .body-wrapper3").css({"height": windowHeight-headPlusFoot+"px"});
            if(footerHeight>FOOTER_HEIGHT){
                 $(".body-wrapper").css({"height": "auto"});
            }
    }} 
function copyReferal(){
    $(".copy-referal-link").click(function() {
        var self = $(this);
        var selfID = self.index();
        var position,top;
        if(selfID==0){
            position=":last"; top="-156%";
        } else {
            position=":first"; top="-227%";
        }
        var range = document.createRange();
        range.selectNode(this);
        window.getSelection().addRange(range);
        try{
            var successful = document.execCommand("copy");
            console.log("eaaaah!!!");
        } catch(err){
            console.log("Fuuuu");
        }
    window.getSelection().removeAllRanges();
    self.parent().parent().find('.arrow_box'+position).css({"top":""+top}).fadeIn("slow");
    setTimeout(function(){ $(".arrow_box"+position).fadeOut("slow")}, 1500);
    });}
//onReady
$(document).ready(function() {
    generateGrid();
    forSVG();
    footDown();
    copyReferal();
     $(".show-popup").magnificPopup({
      type:'ajax',
      showCloseBtn: false});

   /* $("#my-valid-form").validate({
        debug: true,
        rules:{
            login:{
                required: true,
                minlength: 4,
            },
            pswd:{
                required: true,
                minlength: 6,
            },
            email:{
                required: true,
                email: true,
            },
        },
    });*/
});
$(document).on('click',".popups-close-btn",function() {
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.close();
});

function generateGrid(){
    var offsetArrow;
    var playerNum = $(".matches:first-child .player-content-box").length;
    offsetArrowNum = playerNum/2;
    if(playerNum%2===1){alert("Все пропало, игроков нечетное количество(");}
    var iterCount=0;
    for(var j=0; j<playerNum; j++){
        playerNum = playerNum/2;
        iterCount++;
        if(playerNum===1) break;
    }
    console.log(iterCount);
    for(var i=0; i<iterCount+1; i++){
        //$("#tour-grid .tour-web-container").append("<div class='matches'>asdsa</div><div class='offset'><div class='offset-arrows'></div></div>");
    }
    console.log(iterCount);
    for(var j=1; j<iterCount+2; j++){
        //$("#tour-grid .tour-web-container .matches").eq(j).append('"<div class="match azaza"><div class="player-content-box clearfix"><a href="#">Player1</a><div class="win-indicator"></div></div><div class="match-info clearfix"><span>8/13 9pm - Completed</span></div> <div class="player-content-box clearfix"><a href="#">Player2</a></div></div>"');
    }
       
}

//qweqweqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwe
