function überprüfung(){
  var benutzername=document.getElementById("benutzername").value;
  var passwort=document.getElementById("passwort").value;
  if(benutzername == "admin" && passwort == "justin"){
    window.alert("login erfolgreich");
    window.open("Andere Projekte Zugang.html");
  } else{
    window.alert("login fehlgeschlagen");
  }
}
