function cargarCiudad(ciudad){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=95176c8edea30e33338e0eaddd53a916", function(data){
         console.log(data);
 
         document.querySelector("#ciudad").textContent = data.name;
         document.querySelector("#temperatura").textContent = (data.main.temp - 273.15).toFixed(1);
         document.querySelector("#grados").innerHTML = "<sup>°C</sup>";
         document.querySelector("#wicon").src="http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
         document.querySelector("#descripcion").textContent = data.weather[0].description;
 
         document.querySelector(".container").style.visibility = "visible";  
     })
 
     .fail(function() {
         alert(`Disculpá, no hayamos la ciudad ${ciudad}.`);
     })
 }
 
 let boton= document.querySelector("button");
 boton.addEventListener("click", function(){
     let input = document.querySelector("input");
     let ciudad = input.value;
 
     if(ciudad. trim() === ""){
         alert("No ingresaste ningún valor.")
     } else {
     input.value = "";
     cargarCiudad(ciudad);    
     }
 
     //Agregá una validación para que le muestre un alert al usuario si ingresa el nombre de una ciudad inexistente. Si la ciudad es inexistente, la API devolverá un Error 404. 🔍 Para aprender más, usá tus habilidades de developer y googleá la solución .fail.
  
 }
 )
 