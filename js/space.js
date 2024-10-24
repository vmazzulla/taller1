let api = "https://images-api.nasa.gov/search?q=";
let contenedor = document.getElementById("contenedor");
let btnBuscar = document.getElementById("btnBuscar");

document.addEventListener("DOMContentLoaded", () => {
    btnBuscar.addEventListener("click", () => {
        let busqueda = document.getElementById("inputBuscar").value;
        mostrarinfo(busqueda);
    })
})

function mostrarinfo(busqueda){
    fetch(api + busqueda)
        .then((response)=> response.json())
        .then((data) => {
            contenedor.innerHTML = "";
            for (let datos of data.collection.items){
                contenedor.innerHTML += `
                    <div class="card" id="card">
                        <img src="${datos.links[0].href}">
                        <div class="card-body">
                            <h3 class="card-title">${datos.data[0].title}</h3>
                            <p class="caard-text">${datos.data[0].description}</p>
                            <p class="card-text">${datos.data[0].date_created}</p>
                        </div>
                    </div>`
            }
        })
        .catch((error) => {
            console.log("Error al cargar el contenido");
        });
}