function pasarFarenheitACelcius(gradosFarenheit) {
  return gradosFarenheit - 273.15;
}

function mostrarCiudad(ciudad) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916`
     https://api.openweathermap.org/data/2.5/forecast?q=london,&appid=95176c8edea30e33338e0eaddd53a916

  )
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      console.log(respuesta);
      document.querySelector(".ciudad").textContent = respuesta.name;
      document.querySelector("#temperatura").textContent =
        pasarFarenheitACelcius(respuesta.main.temp).toFixed(1) + " °C";
      // Construir la URL completa del icono del clima
      const iconoURL = `https://openweathermap.org/img/wn/${respuesta.weather[0].icon}.png`;
      console.log("URL del icono:", iconoURL); // Verifica la URL completa en la consola
      // Asignar la URL del icono al atributo src de la imagen
      document.querySelector("#wicon").src = iconoURL;
      document.querySelector("#descripcion").textContent =
        respuesta.weather[0].description;
      //      document.querySelector(".container").classList.remove("oculto");
    })
    .catch((error) => {
      console.log(error);
      mostrarError(`Disculpa, no se encontró la ciudad ${ciudad}.`);
    });
}

function mostrarError(texto) {
  alert(texto);
}

function manejarInputCiudad() {
  const $input = document.querySelector("input");
  const ciudad = $input.value;
  if (ciudad.trim() === "") {
    mostrarError("No ingresaste ningún valor.");
  } else {
    $input.value = "";
    mostrarCiudad(ciudad);
  }
}
const $boton = document.querySelector("button");
$boton.addEventListener("click", manejarInputCiudad);

