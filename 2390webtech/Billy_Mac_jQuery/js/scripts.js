$( function() {
    $( "#accordion" ).accordion();
    $("footer").text("© All rights reserved to their rightful owners. jQuery 2025");
    
    $("footer").css("color", "white");
    $("#multiple").css("text-align", "justify");
    $(".btn").click(function() {
        $(".us").toggle("slow");
      });
      

    $(".cpupic").attr("src","images/cpu2.png");
    $(".sad").attr("src","images/preserve.png");
    $(".real").attr("src","images/cloud.jpg");

    $("#dslide1").click(function(){
        $(".slide").attr("src", "images/burguer_deluxe.jpg");
    
    });

    $("#dslide2").click(function(){
        $(".slide").attr("src", "images/nachos.jpg");
    
    });

    $("#dslide3").click(function(){
        $(".slide").attr("src", "images/chicken_sandwich.jpg");
    
    });

    $("#dslide4").click(function(){
        $(".slide").attr("src", "images/mac'n'cheese.jpg");
    
    });

    $("#dslide5").click(function(){
        $(".slide").attr("src", "images/Burritos.jpeg");
    
    });

    $("#dslide6").click(function(){
        $(".slide").attr("src", "images/chillicheesefries.jpg");
    
    });

    $("#dslide7").click(function(){
        $(".slide").attr("src", "images/chilidog.jpg");
    
    });

    $("#dslide8").click(function(){
        $(".slide").attr("src", "images/chocolate.jpg");
    
    });

    $("#dslide9").click(function(){
        $(".slide").attr("src", "images/onionburguer.jpg");
    
    });

    $("#dslide10").click(function(){
        $(".slide").attr("src", "images/ultimate.jpeg");
    
    });



} );


$("button").click(function() {
$("ul").slideToggle();
});



$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effect" ).show( selectedEffect, options, 500, callback );
    }
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    }
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
        $( ".toggler" ).toggle();
        $( "#effect" ).css({ overflow: "hidden" });
      });
      
  } );


  $(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('.menu').slideToggle('slow');
    });
  });


