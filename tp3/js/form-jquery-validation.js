$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     $("#submit").on("click",function(){ 
  //console event.preventDefault(); 
   console.log( "click" ); 
 
     // Y mettre le code jQuery pour valider tous les champs du formulaire
     if ($("#nom").val().length>4 && $("#prenom").val().length>4 && $("#mail").val().length>4 && $("#addresse").val().length>4 ){
 
      $('#myModal').modal("show");
      $(".modal-title").text("Bienvenue "+ $("#Nom").val());
      $(".modal-body").html('Vous etes né(e) le '+ $("#date").val());
      $(".modal-body").html('<a href="http://maps.google.com/maps?q='+ $("#addresse").val()+'"> <img src="https://maps.googleapis.com/maps/api/staticmap?center='+$("#addresse").val()+ ',&zoom=13&size=400x400"/></a> <br></br>'
          +'et vous habitez <a href="http://maps.google.com/maps?q='+ $("#addresse").val()+'">'+ $("#addresse").val()+'</a>');
     
    
      }
      else
      {
       $('#myModal').modal("show");
      $(".modal-title").text("Message Modal");
      $(".modal-body").html('Veuillez remplir tous les champs SVP !');
      
      }
  });
 
 
 });