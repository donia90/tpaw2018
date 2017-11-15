$( document ).ready(function() {
    
         console.log( "DOM ready!" );
    
         $("#submit").on("click",function(event){
             event.preventDefault();
             console.log("click");  
    
             if($("#nom").val().length<5 || $("#prenom").val().length<5 ||
                $("#adresse").val().length<5 || $("#mail").val().length<5 || $("#date".val()==""))
             {
    
                $(".modal-title").text("Message Modal");
                $(".modal-body").html('Veuillez remplir tous les champs SVP');
    
             }
             else{
    
                $(".modal-title").text("Bienvenu   " + $("#nom").val()+" "+$("#prenom"));
    
                $(".modal-body").html(' Votre date de naissance est : ' + $("#date").val() + 
                '</br>'  + 'Et vous habitez : ' + '</br>'  + 
                '<img src="https://maps.googleapis.com/maps/api/staticmap?center=Noisy%20Le%Grand&markers=Noisy%20Le%Grand&size=800x400&zoom=12&key=AIzaSyBAIbFV9W1NopwHu8RFS06YugjVXqn6ewc"  height="260" width="420"/>' 
                 + '</br>' + '<a href="http://maps.google.com/maps?q=Noisy-Le-Grand">' + $("#adresse").val() +  '</a>' );
    
             }
    
             $("#myModal").modal("show");
         });
    
     });