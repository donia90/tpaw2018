function validation()
{
    LN=document.getElementById("nom").value.length;
    Lp=document.getElementById("prenom").value.length;
    Laddress=document.getElementById("addresse").value.length;
    Ldate=document.getElementById("date").value.length;
    Lmail=document.getElementById("mail").value.length;

   
    if(LN>=5 && Lp >=5 && Ldate >= 5 && Laddress>=5 && Lmail>=5)
    {document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    document.getElementById("error").innerHTML ="";}
   
    if(LN==0)
        { document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
        document.getElementById("resultat").innerHTML =""; }
        
    if(LN < 5)
    {document.getElementById("error").innerHTML="Le nom doit contenir au moins 5 caractère";
    document.getElementById("resultat").innerHTML ="";}
           
    if(Lp==0)
    {document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
    document.getElementById("resultat").innerHTML ="";}
             
    if(Lp < 5)
    {docuemnt.getElementById("error").innerHTML="Le prénom doit contenir au moins 5 caractère";
    document.getElementById("resultat").innerHTML ="";}
                   
    if(Ldate==0)
    {document.getElementById("error").innerHTML="la saisie de la date est oblgatoire";
    document.getElementById("resultat").innerHTML ="";}
                     
    if(Ldate < 5)
    {docuemnt.getElementById("error").innerHTML="La date doit contenir au moins 5 caractère";
    document.getElementById("resultat").innerHTML ="";}
                            
    if(Laddress == 0)
    {document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
    document.getElementById("resultat").innerHTML ="";}
                           
    if(Laddress< 5)
    {docuemnt.getElementById("error").innerHTML="L'adresse doit contenir au moins 5 caractère";
    document.getElementById("resultat").innerHTML ="";}
       
                                    
    if(Lmail==0)
    {document.getElementById("error").innerHTML="la saisie du mail est obligatoire";
    document.getElementById("resultat").innerHTML ="";}
                                      
    if(Lmail< 5)
    {document.getElementById("error").innerHTML="Le mail doit contenir au moins 5 caractère";
    document.getElementById("resultat").innerHTML ="";}
                                      
}