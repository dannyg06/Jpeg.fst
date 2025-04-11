$( function() {
    $( "#accordion" ).accordion();
    $("footer").text("© All rights reserved to their rightful owners. jQuery 2025");
    $("button").css("background-color","#fefae0");
    $("footer").css("color", "white");

    $(".cpupic").attr("src","images/cpu2.png");
    $(".sad").attr("src","images/preserve.png");
    $(".real").attr("src","images/cloud.jpg");

    $("#dslide1").click(function(){
        $(".slide").attr("src", "images/sorry.jpg");
    
    });

    $("#dslide2").click(function(){
        $(".slide").attr("src", "images/error.jpeg");
    
    });

    $("#dslide3").click(function(){
        $(".slide").attr("src", "images/obsolence.png");
    
    });

    $("#dslide4").click(function(){
        $(".slide").attr("src", "images/software.png");
    
    });

    $("#dslide5").click(function(){
        $(".slide").attr("src", "images/link.png");
    
    });

    $("#dslide6").click(function(){
        $(".slide").attr("src", "images/404.png");
    
    });

} );


$("button").click(function() {
$("ul").slideToggle();
});


