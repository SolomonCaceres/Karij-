
$(document).ready(function() {
     /* alert('Oh, hi there, world');*/
   




/* Reset function For Favorites*/
$('#clear-form').on('click', function()
    {
        $('#FAVFORM').find('input:text').val('');
			$("#AFavbox").hide();
			$("#BFavbox").hide();
			$("#CFavbox").hide();
			$("#DFavbox").hide();
			$("#EFavbox").hide();

});






/*This hides all the form text boxes for the Favorites menu*/
$(".MAINFAVORITEBOX").hide();
$("#AFavbox").hide();
$("#BFavbox").hide();
$("#CFavbox").hide();
$("#DFavbox").hide();
$("#EFavbox").hide();







/* This is the mouse enter and mouse down function for the FAVORITES Button*/

$(".Favbutton").mouseenter(function(){

	$(".MAINFAVORITEBOX").show("145");

});

$(".Favbutton").mousedown(function(){

	$(".MAINFAVORITEBOX").hide("145");
});








/*These are the text boxes within the MAINFAVORITEBOX Div*/

$( "body" ).on( "click", "#Favbox", function() {
  $("#AFavbox").show();

});

$( "body" ).on( "click", "#AFavbox", function() {
  $("#BFavbox").show();


});

$( "body" ).on( "click", "#BFavbox", function() {
  $("#CFavbox").show();


});

$( "body" ).on( "click", "#CFavbox", function() {
  $("#DFavbox").show();


});

$( "body" ).on( "click", "#DFavbox", function() {
  $("#EFavbox").show();


});


$( "body" ).on( "click", "#EFavbox", function() {
  $("#FFavbox").show();


});






});