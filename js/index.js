// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

$(document).ready(function () {

   //Carga los datos que estan en el JSON (info.json) usando AJAX
  var peticion = new XMLHttpRequest();
  peticion.open('GET', 'http://127.0.0.1:5500/info.json');
  peticion.onload = function () {
      let datos = JSON.parse(peticion.response)
  
//Guarda el resultado en variables
      eventos = datos.eventos;
      hoy = datos.fechaActual
      console.log(eventos)
      console.log(hoy)

//   EVENTOS FUTUROS
//Selecciona los eventos que sean posteriores a la fecha actual del JSON

      proximosEventos = eventos.filter(x => {
        return x.fecha > hoy
      })
      console.log(proximosEventos)

//Ordena los eventos segun la fecha (los mas cercanos primero)

    console.log(proximosEventos.sort((a, b) => new Date(a.fecha).getTime() > new Date(b.fecha).getTime()));

//Crea un string que contenga el HTML que describe el detalle del evento


    creaEvento = document.getElementById("proximos");

//Recorre el arreglo y concatena el HTML para cada evento

    for(var i=0; i<2; i++){

//Modifica el DOM agregando el html generado dentro del div con id=evento

        var div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = '<H3>' + proximosEventos[i].nombre + "</H3><h6>Fecha del evento: " + proximosEventos[i].fecha + "</h6><p>Descripción: " + proximosEventos[i].descripcion + "</p><p>Lugar: " + proximosEventos[i].lugar + '</p><spam class="invi">Invitados: ' + proximosEventos[i].invitados + '</spam><spam class="prec">Precio: ' + proximosEventos[i].precio + "</spam>";
        creaEvento.appendChild(div);
    }

// EVENTOS PASADOS
//Selecciona los eventos que sean anteriores a la fecha actual del JSON

    pasadosEventos = eventos.filter(x => {
        return x.fecha < hoy
      })
      console.log(pasadosEventos)

  //Ordena los eventos segun la fecha (los mas recientes primero)

    console.log(pasadosEventos.sort((a, b) => new Date(a.fecha).getTime() < new Date(b.fecha).getTime()));

  //Crea un string que contenga el HTML que describe el detalle del evento

    creaEvento = document.getElementById("pasados");

  //Recorre el arreglo y concatena el HTML para cada evento

    for(var i=0; i<2; i++){

//Modifica el DOM agregando el html generado dentro del div con id=evento

        var div = document.createElement("div");
        div.classList.add("col")
        div.innerHTML = '<H3>' + pasadosEventos[i].nombre + "</H3><h6>Fecha del evento: " + pasadosEventos[i].fecha + "</h6><p>Descripción: " + pasadosEventos[i].descripcion + "</p><p>Lugar: " + pasadosEventos[i].lugar + '</p><spam class="invi">Invitados: ' + pasadosEventos[i].invitados + '</spam><spam class="prec">Precio: ' + pasadosEventos[i].precio + "</spam>";
        creaEvento.appendChild(div);
    }
      }    
  peticion.send();
});
