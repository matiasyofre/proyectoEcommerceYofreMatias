// Variables
let main_instancia = document.querySelector(".main_instancia");
let offcanvas = document.querySelector(".offcanvas_shop");
let btnOpen = document.querySelector(".btn-open");
let btnClose = document.querySelector(".btn-close");

// Botones del carrito de compras
btnOpen.addEventListener('click' , function(e){
    e.preventDefault();
    offcanvas.classList.add('active');
} );

btnClose.addEventListener('click' , function (e){
    e.preventDefault();
    offcanvas.classList.remove('active');
});

// Renderizado de la pagina de inicio
let renderInicio = () => {  
    let section = document.createElement("section");
    main_instancia.innerHTML = ""
    section.innerHTML = `
    <section class = "container-fluid"> 
    <h2> Somos Mundo tech: Tenemos el producto que buscás, todo al alcance de un solo click. </h2>
    <br>
    <div>
            <h4>ENVÍO GRATIS EN COMPRAS SUPERIORES A $10.000</h4>
            <p>Envíos a todo el país en 24hs.</p>
        </div>
        <div>
            <h4>3 CUOTAS SIN INTERES</h4>
            <p>Con todas las tarjetas</p>
        </div>
        <div>
            <h4>Garantía de 1 año</h4>
            <p>
            Todos nuestros productos poseen garantía original de fábrica.
            </p>
        </div>
    </section>`
    main_instancia.appendChild(section);
    /*Renderizado de localizacion y temperatura */
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cordoba&units=metric&appid=b5938c061598cad0c3dfee411c014e40')
        .then(response => response.json())
        .then(data => {
            let temperatura = data.main.temp;
            let ubicacion = data.name;
            let p_ubicacion = document.querySelector(".temp");
            p_ubicacion.innerHTML=`<p><i class="bi bi-geo-alt"></i> Ubicación: ${ubicacion}, Argentina - Temperatura Actual: ${temperatura}°</p> `
    })
}
renderInicio();

// Render de categorias
let renderMovilidad = () =>{
    let movilidad = listadoArticulos.filter(e => e.categoria == "movilidad-urbana");
    main_instancia.innerHTML = ""
    
    movilidad.forEach((e) => {
        let div = document.createElement("div")
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>`                            
                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));    
    })
}
// Categoria Smartwaches
let renderSmartwatches = () =>{
    let smartwatches = listadoArticulos.filter(e => e.categoria == "smartwatch");
    main_instancia.innerHTML = ""
    smartwatches.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>`                            
                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));  

    })        
}
// Categoria Smartphones
let renderSmartphones = () =>{
    let smartphones = listadoArticulos.filter(e => e.categoria == "smartphones");
    main_instancia.innerHTML = ""
    smartphones.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>`                            
                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}

//Renderizar todos los articulos
let renderTodo = () => {
    main_instancia.innerHTML = ""
    listadoArticulos.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-primary btn-compra" id="btn-añadir">Añadir al carrito</a>          
                        </div>
                    </div>`                                            
                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
        btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}



