let carrito = [];
let contenedor_carrito = document.getElementById('tbody')

// Cargar del LocalStorage

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizar_carrito();
    }
})

// Agregar funciones al carrito
let agregar_al_carrito = (e) => {
    let test = carrito.some((item) => item.id === e);
    if(test){
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e && item.und < item.stock){
                item.und++
            }
            Toastify({
                text: "┬íProducto agregado!",
                duration: 1500,
                gravity: 'bottom',
                position: 'right',
                style: { background: 'linear-gradient(to right, blue, green)'}
            }).showToast();
        })
    }
    else{
        let item = listadoArticulos.find((prod)=> prod.id === e)
        carrito.push(item);
        Toastify({
            text: "┬íProducto agregado!",
            duration: 1500,
            gravity: 'bottom',
            position: 'right',
            style: { background: 'linear-gradient(to right, blue, green)'}
        }).showToast();
    }
    actualizar_carrito();
}

// Actualiza el carrito y local storage
let actualizar_carrito = () => {
    contenedor_carrito.innerHTML = "";
    carrito.forEach((e => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${e.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${e.nombre} $${e.precio}</h5>
                <p class = "descripcion_card"> Unidades: ${e.und} </p>
                <p class = "descripcion_card"> Precio total: $${e.precio * e.und} </p>
                <button onclick="agregar_al_carrito(${e.id})"class=" borrar_item css_btn"><i class="bi bi-plus-circle"></i></button>
                <button onclick="restar_item(${e.id})"class=" css_btn"><i class="bi bi-dash-circle"></i></button>
                <button onclick="eliminar_del_carrito(${e.id})"class=" css_btn"><i class="bi bi-trash"></i></button>                
                </div>
            </div>
        </div>
        </div>`    
        contenedor_carrito.appendChild(fila);  
        localStorage.setItem('carrito', JSON.stringify(carrito));   
    } ))
    precioTotal.innerText = carrito.reduce((acc , e ) =>  acc + e.precio * e.und, 0);
}

// Funci├│n eliminar
let eliminar_del_carrito = (e_id) => {
    let item = carrito.find(prod => prod.id === e_id);
    let indice = carrito.indexOf(item);
    carrito.splice(indice , 1);
    item.und - 1;
    actualizar_carrito();
    Toastify({
        text: "┬íProducto eliminado!",
        duration: 1500,
        gravity: 'bottom',
        position: 'right',
        style: { background: 'linear-gradient(to right, blue, red)'}
    }).showToast();
}
// Funci├│n quitar articulo
let restar_item = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e && item.und > 1){
                item.und--                
            }
            else if(item.id === e && item.und < 1){
                eliminar_del_carrito();
            }
        })
    }
    actualizar_carrito();
    Toastify({
        text: "┬íProducto eliminado!",
        duration: 1500,
        gravity: 'bottom',
        position: 'right',
        style: { background: 'linear-gradient(to right, blue, red)'}
    }).showToast();
}
// Funci├│n vaciar carrito
let limpiarCarrito = () => {
    contenedor_carrito.innerHTML = "";
    carrito = [];
    actualizar_carrito();
}
// Funci├│n solicitar correo para comprar
function solicitarCorreo() {
    (async() => {
        let {value : correo } = await Swal.fire({
            showCloseButton: true,
            icon: "info",
            html: "<b>Ingrese el correo electr├│nico al cual quiere que le mandemos la informaci├│n</b>",
            input: "email",
            customClass: { input:"inputSweetAlert" },
            confirmButtonText:"Confirmar",
            background: '#FFFDD0',
        })
        if (correo){
            localStorage.setItem("Correo", correo)
            Swal.fire({
                icon:"success",
                html:`<b> Casilla de correo registrada existosamente </b>`,
                background: '#FFFDD0'
            });
        }
    })()
}

  // Funci├│n comprar
let comprar = () => {
    if(carrito.length === 0){
        Swal.fire({
            title: 'No hay nada en su carrito',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
        })          
    }else{
        Swal.fire({
            title: 'Finalizar compra?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Finalizar'
        })
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Compra finalizada!'                
                }
                )
            limpiarCarrito();
            }
        })
    }
}

