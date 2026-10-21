
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

function ocultarSecciones() {
    document.getElementById("parametros").classList.remove("activa");
    document.getElementById("clientes").classList.remove("activa");
}

function mostrarSeccion(id) {
  ocultarSecciones();
  document.getElementById(id).classList.add("activa");
}

function guardarTasa() {
  let tasa = recuperarFloat("tasaInteres");
  if (tasa >= 10 && tasa <= 20) {
      mostrarTexto("mensajeTasa", "Tasa configurada correctamente: " + tasa + "%");
  } else {
      mostrarTexto("mensajeTasa", "La tasa debe estar entre 10% y 20%");
  }
}

function guardarCliente() {
  let cedula = recuperaraTexto("txtCedula");
  let nombre = recuperaraTexto("txtNombre");
  let apellido = recuperaraTexto("txtApellido");
  let ingresos = recuperarFloat("txtIngresos");
  let egresos = recuperarFloat("txtEgresos");
  let nuevoCliente = {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    ingresos: ingresos,
    egresos: egresos,
  }
  clientes.push(nuevoCliente);
  pintarClientes();
  alert("cliente guardado correctamente!");
}

function guardarCliente() {
    let cedula = recuperaraTexto("txtCedula");
    let nombre = recuperaraTexto("txtNombre");
    let apellido = recuperaraTexto("txtApellido");
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let clienteExistente = buscarCliente(cedula);
    if (clienteExistente == null) {
        let nuevoCliente = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            ingresos: ingresos,
            egresos: egresos
        };
        clientes.push(nuevoCliente);
        alert("Cliente creado correctamente");
    } else {
        clienteExistente.nombre = nombre;
        clienteExistente.apellido = apellido;
        clienteExistente.ingresos = ingresos;
        clienteExistente.egresos = egresos;
        alert("Cliente actualizado correctamente");
    }
    pintarClientes();
    limpiar();
}

function buscarCliente(cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (i=0;i<clientes.length;i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

function seleccionarCliente(cedula) {
  let cliente = buscarCliente(cedula);
  if (cliente != null) {
    clienteSeleccionado = cliente;
    mostrarTextoEnCaja("txtCedula", cliente.cedula);
    mostrarTextoEnCaja("txtNombre", cliente.nombre);
    mostrarTextoEnCaja("txtApellido", cliente.apellido);
    mostrarTextoEnCaja("txtIngresos", cliente.ingresos);
    mostrarTextoEnCaja("txtEgresos", cliente.egresos);
  }
}

function pintarClientes() {
  let cmpTabla = document. getElementById("tablaClientes");
  let contenidoTabla = "";
  let clienteActual;
  
  for (let i=0; i<clientes.length;i++) {
    clienteActual = clientes[i];
    contenidoTabla += "<tr>" +"<td>" + clienteActual.cedula + "</td>" +
    "<td>" + clienteActual.nombre + "</td>" + 
    "<td>" + clienteActual.apellido + "</td>" +
    "<td>" + clienteActual.ingresos + "</td>" +
    "<td>" + clienteActual.egresos + "</td>" +
    "<td>" + "<button onclick='seleccionarCliente(" + clienteActual.cedula + ")'>Actualizar</button>" +
    "<button onclick='eliminarCliente(" + i + ")'>Eliminar</button>" + "</td>"+
    "</tr>";
  }
  cmpTabla.innerHTML = contenidoTabla;
}

function limpiar() {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtIngresos", "");
    mostrarTextoEnCaja("txtEgresos", "");
    clienteSeleccionado = null;
}