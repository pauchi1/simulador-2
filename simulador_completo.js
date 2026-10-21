
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
    "<td>" + "<button onclick='cargarCliente(" + i + ")'>Actualizar</button>" +
    "<button onclick='eliminarCliente(" + i + ")'>Eliminar</button>" + "</td>"+
    "</tr>";
  }
  cmpTabla.innerHTML = contenidoTabla;
}