
  let clientes = [];
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

  function ocultarSecciones() {
    let secciones = document.getElementsByTagName("section");
    let unaSeccion;
    
    for (let i = 0; i < secciones.length; i++) {
        unaSeccion = secciones[i];
        unaSeccion.classList.remove("activa");
    }
}
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios