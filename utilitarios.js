function recuperaraTexto(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
    }
    
    function recuperarInt(idComponente){
        let valorCaja=recuperaraTexto(idComponente);
        let valorEntero=parseInt(valorCaja);
        return valorEntero;
    }
    function recuperarFloat(idComponente){
        let valorCaja=recuperaraTexto(idComponente);
        let valorFlotante=parseFloat(valorCaja);
        return valorFlotante;
    }
    function mostrarTexto(idComponente,mensaje){
        let componente;
        componente=document.getElementById(idComponente);
        componente.innerText=mensaje;
    }
    function mostrarTextoEnCaja(idComponente,mensaje){
        let componente;
        componente=document.getElementById(idComponente);
        componente.value=mensaje;
    }
    
    function mostrarImagen(idComponente,rutaImagen){
        let componente;
        componente=document.getElementById(idComponente);
        componente.src = rutaImagen;
    
    }

//funciones para el crédito

function calcularDisponible(ingresos, egresos) {
    let valorDisponible = ingresos - egresos;
    if (valorDisponible < 0) {
        valorDisponible = 0;
    }
    return valorDisponible;
}
function calcularCapacidadPago(montoDisponible) {
    let CapacidadPago = montoDisponible * 0.3;
    return CapacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = plazoAnios * monto * (tasa/100);
    return interes;
}

function calcularTotalPagar(monto, interes) {
    let totalPagar = monto + interes + 100;
    return totalPagar;
}

function calcularCuotaMensual(total, plazoAnios) {
    let cuotaMensual = total / (plazoAnios * 12);
    let totalMensual = cuotaMensual.toFixed(2);
    return totalMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago > cuotaMensual) {
        return true;
    } else {
        return false;
    }
}