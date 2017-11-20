 function ajout(){
    if ($("#nom").val() == ""
    || $("#prenom").val() == ""
    || $("#date").val() == ""
    || $("#adresse").val() == ""
    || $("#mail").val() == "") {
    alert("Veuillez remplir tous les champs SVP !")
} else {

 document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
 '<tr><td>'+$("#nom").val()
 +'</td><td>'+$("#prenom").val()
 +'</td><td>'+$("#date").val()
 +'</td><td> <a href="https://www.google.fr/maps/place/">'+$("#adresse").val()
 +'</a></td><td><a href="https://www.google.fr/maps/place/">'+$("#mail").val()+'</a></td></tr>'


 };
};