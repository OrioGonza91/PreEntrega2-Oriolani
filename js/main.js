// Inicializar variables
let carrito = [];
let productos = [];

function Producto(nombre, precio,stock){
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
}

//Instancio productos y los pusheo al array
const producto1 = new Producto("Casaca deportiva 'Nike'",25000,50);
productos.push(producto1);
const producto2 = new Producto("Short deportivo 'Adidas'",15000,20);
productos.push(producto2);
const producto3 = new Producto("Botines 'Adidas'",100000,10)
productos.push(producto3);


// Mostrar contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("Su carrito está vacío.");
    } else {
        let mensaje = "Su carrito contiene:\n";
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            let producto = carrito[i];
            mensaje += producto.nombre + " - " + "$" + producto.precio + "\n"
            total += producto.precio;
        }
        mensaje += "Total: $" + total;
        alert(mensaje);
    }
}

//Ingreso de usuarios
let usuariosRegistrados = [{
    usuario: "GonOrio91",
    password: "444"
}];

function tieneUsuario() {
    let respuesta = "";
    while (respuesta !== "s" && respuesta !== "n") {
        respuesta = prompt("Tiene un usuario y contraseña registrado? s/n");
    }

    if (respuesta === "s") {
        validarUsuario();
    } else if (respuesta === "n") {
        registroUsuario();
        validarUsuario();
    } else {
        alert("Ingrese una respuesta válida.");
        tieneUsuario();
    }
}

//Registro de usuario
function registroUsuario() {
    let usuario = prompt("Genere nuevo nombre de usuario:");
    let password = prompt("Genere contraseña:")

    while (usuario === "" && password === "") {
        alert("Debe ingresar un nombre de usuario y contraseña válidos.")
        usuario = prompt("Genere nuevo nombre de usuario:")
        password = prompt("Genere contraseña:")
    }

    usuariosRegistrados.push({
        usuario: usuario,
        password: password
    });
}

//Menu
function mostrarMenu() {
    let opcion;
    do {
        opcion = mostrarOpciones();
        switch (opcion) {
            case "1":
                agregarProductos();
                break;
            case "2":
                buscarProducto();
                break;
            case "3":
                mostrarCarrito();
                break;
            case "4":
                eliminarProductoDeCarrito();
                break;
            case "x":
                alert("Saliendo del programa.");
                break;
            default:
                alert("La opción elegida no es válida");
                break;
        }
    } while (opcion !== "x");
}

function mostrarOpciones() {
    return prompt("Elija una opción:\n1. Listar y agregar productos al carrito\n2. Buscar productos por marca\n3. Ver carrito de compras\n4. Eliminar productos del carrito\nx. Salir");
}

function agregarProductos() {
    let productosDisponibles = "";
    for (let i = 0; i < productos.length; i++) {
        productosDisponibles += (i + 1) + ". " + productos[i].nombre + "- $" + productos[i].precio + "\n";
    }

    let indiceSeleccionado = "";
    while (indiceSeleccionado !== "x") {
        indiceSeleccionado = prompt("Seleccione un producto por su número de índice o escriba 'x' para volver al menú principal:\n\n" + productosDisponibles);

        if (indiceSeleccionado < 1 || indiceSeleccionado > productos.length) {
            if (indiceSeleccionado !== "x") {
                alert("El índice seleccionado no es válido. Intenta de nuevo.");
            }
        } else {
            if (indiceSeleccionado !== "x") {
                let productoSeleccionado = productos[indiceSeleccionado - 1];
                carrito.push(productoSeleccionado);
                alert("Se ha agregado el producto " + productoSeleccionado.nombre + " al carrito.");
            }
        }
    }

    if (indiceSeleccionado === "x") {
        mostrarMenu();
    }
}

//Buscar productos por marca
function buscarProducto() {
    let textoBusqueda = prompt("Ingrese el marca a buscar en los productos:");
    let resultadosBusqueda = [];

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        if (producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())) {
            resultadosBusqueda.push(producto);
        }
    }

    if (resultadosBusqueda.length === 0) {
        alert("No se encontraron productos que coincidan con tu búsqueda.");
    } else {
        let resultadosLista = "";
        for (let i = 0; i < resultadosBusqueda.length; i++) {
            let producto = resultadosBusqueda[i];
            resultadosLista += "Nombre: " + producto.nombre + ", Precio: $" + producto.precio + "\n";
        }
        alert("Resultados de búsqueda:\n\n" + resultadosLista);
    }
}

//Eliminar producto de carrito
function eliminarProductoDeCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. No hay productos para eliminar.");
        return;
    }

    let productosEnCarrito = "";
    for (let i = 0; i < carrito.length; i++) {
        productosEnCarrito += (i + 1) + ". " + carrito[i].nombre + "\n";
    }

    let indiceSeleccionado = "";
    while (indiceSeleccionado < 1 || indiceSeleccionado > carrito.length) {
        indiceSeleccionado = prompt("Selecciona un producto por su número de índice para eliminarlo del carrito:\n\n" + productosEnCarrito);

        if (indiceSeleccionado < 1 || indiceSeleccionado > carrito.length) {
            alert("El índice seleccionado no es válido. Intenta de nuevo.");
        }
    }

    let productoEliminado = carrito[indiceSeleccionado - 1];
    carrito.splice(indiceSeleccionado - 1, 1);
    alert("Se ha eliminado el producto " + productoEliminado.nombre + " del carrito.");
}

//Validar
function validarUsuario() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña:");

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i].usuario === usuario && usuariosRegistrados[i].password === password) {
            alert("Usuario y contraseña correctos.");
            mostrarMenu();
            return;
        }
    }

    alert("Usuario y/o contraseña incorrectos.");
    validarUsuario();
}

// Ejecutar la función tieneUsuario() cuando la página carga
window.onload = function() {
    tieneUsuario();
}

