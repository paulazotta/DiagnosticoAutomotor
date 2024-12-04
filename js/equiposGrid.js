const gridEquipos = document.getElementById("gridEquipos");

const equipos = async() => {
    const response = await fetch ("js/productosAutel.json")
    const data = await response.json()
    console.log(data)
}

equipos()

// CARDS 
function cards(){
     // Container card
     const card = document.createElement("div");
     card.className = "cardEquipos"
 
     // Nombre del equipo
     const nombreEquipo = document.createElement("h5");
     nombreEquipo.innerText = "titulo"
     nombreEquipo.className = "nombreEquipo containerGrid";
 
     // Background imagen
     const backImagen = document.createElement("div");
     backImagen.className = "containerGrid";

     // Imagen del equipo
     const img = document.createElement("img");
     img.src = "../imagenes/MX_808TS.jpg"//el.img
     img.className = "imagenEquipo";
 
     // Background descripción
     const backDescripcion = document.createElement("div");
     backDescripcion.className = "containerGrid";

     // Descripción del equipo
     const descripcionEquipo = document.createElement("p");
     descripcionEquipo.className = "descripcionEquipo";
     descripcionEquipo.innerText = "hola \n como" // el.p;
 
     // Agrego todo
     card.appendChild(nombreEquipo);
     card.appendChild(backImagen);
     card.appendChild(backDescripcion);
     //card.appendChild (descripcionEquipo);
    
     backImagen.appendChild(img);
     backDescripcion.appendChild(descripcionEquipo);
     gridEquipos.appendChild(card);
 
}
cards();


