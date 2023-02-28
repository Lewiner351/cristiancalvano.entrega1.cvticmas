var x = document.getElementById("mapa");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "La geolocalizacion no es compatible.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

document.getElementById("btnfecha").onclick=function() {
  document.getElementById("btnfecha").innerHTML=Date();
}
