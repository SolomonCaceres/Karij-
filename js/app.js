
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
			$("#Favbutton2").hide();
			$("#Favbutton3").hide();
			$("#Favbutton4").hide();
			$("#Favbutton5").hide();
			$("#Favbutton6").hide();

});




/* Reset function For List Box*/
$('.button').on('click', function()
    {
        $('#LISTFORM').find('input:text').val('');
			$("#AListbox").hide();
			$("#BListbox").hide();
			$("#CListbox").hide();
			$("#DListbox").hide();
			$("#EListbox").hide();
			$("#FListbox").hide();
			$("#GListbox").hide();
			$("#HListbox").hide();

});







/*This hides all the form text boxes for the Favorites menu*/
$(".MAINFAVORITEBOX").hide();
$("#AFavbox").hide();
$("#BFavbox").hide();
$("#CFavbox").hide();
$("#DFavbox").hide();
$("#EFavbox").hide();


/*This hides all the Favbuttons which are in the Favorites menu*/
$("#Favbutton2").hide();
$("#Favbutton3").hide();
$("#Favbutton4").hide();
$("#Favbutton5").hide();
$("#Favbutton6").hide();


/*This hides all additional form text boxes for the List Box*/
$("#AListbox").hide();
$("#BListbox").hide();
$("#CListbox").hide();
$("#DListbox").hide();
$("#EListbox").hide();
$("#FListbox").hide();
$("#GListbox").hide();
$("#HListbox").hide();









/* This is the mouse enter and mouse down function for the FAVORITES Button*/

$(".Favbutton").mouseenter(function(){

	$(".MAINFAVORITEBOX").show("145");

});



$(".Favbutton").mousedown(function(){

	$(".MAINFAVORITEBOX").hide("145");
});








/*These are the text boxes within the MAINFAVORITEBOX Div. Once you click on the first one, the others pop up*/

$( ".MAINFAVORITEBOX" ).on( "click", "#Favbox", function() {
  $("#AFavbox").show();
  $("#Favbutton2").show();

});

$( ".MAINFAVORITEBOX" ).on( "click", "#AFavbox", function() {
  $("#BFavbox").show();
  $("#Favbutton3").show();


});

$( ".MAINFAVORITEBOX" ).on( "click", "#BFavbox", function() {
  $("#CFavbox").show();
$("#Favbutton4").show();

});

$( ".MAINFAVORITEBOX" ).on( "click", "#CFavbox", function() {
  $("#DFavbox").show();
$("#Favbutton5").show();

});

$( ".MAINFAVORITEBOX" ).on( "click", "#DFavbox", function() {
  $("#EFavbox").show();
$("#Favbutton6").show();

});


$( ".MAINFAVORITEBOX" ).on( "click", "#EFavbox", function() {
  $("#FFavbox").show();


});







/*These are the text boxes within the MAINLISTBOX Div. Once you click on the first one, the others pop up*/

$( ".MAINLISTBOX" ).on( "click", "#Listbox", function() {
  $("#AListbox").show();

});

$( ".MAINLISTBOX" ).on( "click", "#AListbox", function() {
  $("#BListbox").show();


});

$( ".MAINLISTBOX" ).on( "click", "#BListbox", function() {
  $("#CListbox").show();


});

$( ".MAINLISTBOX" ).on( "click", "#CListbox", function() {
  $("#DListbox").show();


});

$( ".MAINLISTBOX" ).on( "click", "#DListbox", function() {
  $("#EListbox").show();


});


$( ".MAINLISTBOX" ).on( "click", "#EListbox", function() {
  $("#FListbox").show();


});

$( "body" ).on( "click", "#FListbox", function() {
  $("#GListbox").show();


});


$( ".MAINLISTBOX" ).on( "click", "#GListbox", function() {
  $("#HListbox").show();


});










/* Update the Listbox by clicking on a button*/
$( "#Favbutton1" ).on("click", function() {
 
  $( "#Listbox" ).val($("#Favbox").val());
});


$( "#Favbutton2" ).on("click", function() {
 
  $( "#AListbox" ).val($("#AFavbox").val());
  $("#AListbox").show();
});



$( "#Favbutton3" ).on("click", function() {
 
  $( "#BListbox" ).val($("#BFavbox").val());
  $("#BListbox").show();
});


$( "#Favbutton4" ).on("click", function() {
 
  $( "#CListbox" ).val($("#CFavbox").val());
  $("#CListbox").show();
});



$( "#Favbutton5" ).on("click", function() {
 
  $( "#DListbox" ).val($("#DFavbox").val());
  $("#DListbox").show();
});



$("#Favbutton6").on("click", function(){
	$("#EListbox").val($("#EFavbox").val());
$("#EListbox").show();


});











/*Item box logic*/
$("#Itembox") .val(0);


if($("#Listbox") .val()>""){
	$("#Itembox").val(0+1);

};


if($("#AListbox") .val()>""){
	$("#Itembox").val(1+1);

};

if($("#BListbox") .val()>""){
	$("#Itembox").val(2+1);

};

if($("#CListbox") .val()>""){
	$("#Itembox").val(3+1);

};


if($("#DListbox") .val()>""){
	$("#Itembox").val(4+1);

};

if($("#EListbox") .val()>""){
	$("#Itembox").val(5+1);

};



if($("#FListbox") .val()>""){
	$("#Itembox").val(6+1);

};










/*

if($("#Listbox") .val()<1){
	$("#Itembox").val("0");

};


if($("#AListbox").val()>0){
	$("#Itembox").val("1");

};
*/





/*
var sum = add(value1, value2);*/





});



/*

$( "#testbox" ).click(function() {
  var text = $( "#Favbox" ).text();
  $( "#Listbox" ).val( "yes" );
});




/*
$('#name').change(function() {
    $('#firstname').val($(this).val());
});

*/