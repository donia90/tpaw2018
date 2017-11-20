$( document ).ready(function() {
console.log( "DOM ready!" );
$("#submit").on("click",function(){
 //console event.preventDefault();
  console.log( "click" );


if ($("#nom").val().length>4 && $("#prenom").val().length>4 && $("#mail").val().length>8 && $("#adresse").val().length>10 ){

$('#myModal').modal("show");
$(".modal-title").text("Bienvenue "+ $("#nom").val());
$(".modal-body").html('Vous etes né(e) le '+ $("#date").val());
$(".modal-body").html('<a href="http://maps.google.com/maps?q='+ $("#adresse").val()+'"> <img src="https://maps.googleapis.com/maps/api/staticmap?center='+$("#adresse").val()+ ',&zoom=13&size=400x400"/></a> <br></br>'
+'Vous habitez : <a href="http://maps.google.com/maps?q='+ $("#adresse").val()+'">'+ $("#adresse").val()+'</a>');

}
else
{
$('#myModal').modal("show");
$(".modal-title").text("Remplissez tous les champs.");
$(".modal-body").html('Veuillez remplir tous les champs svp.');

}
});


});