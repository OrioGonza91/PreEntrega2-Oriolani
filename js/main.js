// Inicializar variables
let carrito = [];
let productos = [{
        nombre: "Casaca Deportiva 'Nike' ",
        precio: 25000
    },
    {
        nombre: "Short Deportivo 'Adidas'",
        precio: 15000
    },
    {
        nombre: "Botines Adidas 'Copa'",
        precio: 50000
    }
];

// Agregar productos al carrito
function agregar() {
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let respuesta = prompt("¿Quieres agregar " + producto.nombre + " por $" + producto.precio + " al carrito? (s/n)");
        if (respuesta === "s") {
            carrito.push(producto);
        }
    }
}

// Mostrar contenido del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
    } else {
        let mensaje = "Tu carrito contiene:\n";
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
    let respuesta = prompt("Tiene un usuario y contraseña registrado? s/n")
    if (respuesta === "s") {
        validarUsuario();
    } else if (respuesta === "n") {
        registroUsuario();
        validarUsuario();
    } else{
        alert("Ingrese una respuesta válida.")
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

//Validar
function validarUsuario() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña:");

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i].usuario === usuario && usuariosRegistrados[i].password === password) {
            alert("Usuario y contraseña correctos.");
            agregar();
            mostrarCarrito();
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





