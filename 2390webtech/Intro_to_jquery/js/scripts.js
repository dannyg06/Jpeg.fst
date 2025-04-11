$( function() {
    $( "#accordion" ).accordion();
    $(".card").css("color", "white");
    $("footer").text("© All rights reserved to their rightful owners. jQuery 2025");
    $(".pajax").text("AJAX (Asynchronous JavaScript and XML) and JSON (JavaScript Object Notation) are powerful technologies that pair perfectly with jQuery, because it enables developers to create dynamic, interactive web applications. AJAX allows for seamless communication between the client-side and server-side, enabling partial page updates without full page reloads. JSON, a lightweight data interchange format, facilitates easy data exchange between the client and server. By leveraging AJAX and JSON with jQuery, developers can create responsive, data-driven applications that provide a superior user experience. This combination enables effortless retrieval and manipulation of data, streamlined server interactions, and a more engaging, dynamic interface.");
    $(".benefits").text("Benefits of using jQuery");
    $("h1, h2").css("color", "#583101");
    $(".benefits").css("font-size", "30px");
    $("nav").css("background-color", "#ACCBE1");
    $("button").css("background-color","#fefae0");
    $("footer").css("color", "white");
} );


$("button").click(function() {
$("ul").slideToggle();
});


