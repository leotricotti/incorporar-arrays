//********* Consultas **********//

//Menu consultas
let seleccion = prompt(
  "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
);

//Ver últimos movimientos
function Movement(fecha, hora, operacion, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.operacion = operacion;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos movimientos
const movement1 = new Movement(
  "14/07/2022",
  "15:55",
  "Deposito",
  "$ 15.000.00",
  "$ 125.343.00"
);
const movement2 = new Movement(
  "15/07/2022",
  "12:34",
  "Extracción",
  "$ 30.000.00",
  "$ 95.343.00"
);
const movement3 = new Movement(
  "17/07/2022",
  "12:18",
  "Transferencia",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Consultar pagos
function Pagos(fecha, hora, servicio, monto, estado) {
  this.fecha = fecha.toUpperCase;
  this.hora = hora;
  this.servicio = servicio;
  this.monto = monto;
  this.estado = estado;
}

//Pagos
const pago1 = new Pagos(
  "25/06/2022",
  "11:25",
  "Edelap S.A",
  "2.572.27",
  "Aprobada"
);

const pago2 = new Pagos(
  "07/07/2022",
  "10:33",
  "Camuzzi Gas Pampeana",
  "5.362.87",
  "Aprobada"
);

const pago3 = new Pagos(
  "21/07/2022",
  "08:55",
  "Arba Inmobiliario",
  "1.942.63",
  "Aprobada"
);

//Consultar Transferencias
function Transfer(fecha, hora, tipo, monto, saldo) {
  this.fecha = fecha;
  this.hora = hora;
  this.tipo = tipo;
  this.monto = monto;
  this.saldo = saldo;
}

//Base datos transferencias
const transfer1 = new Transfer(
  "14/07/2022",
  "15:55",
  "Transferencia Recibida",
  "$ 15.000.00",
  "$ 125.343.00"
);
const transfer2 = new Transfer(
  "15/07/2022",
  "12:34",
  "Transferencia Realizada",
  "$ 30.000.00",
  "$ 95.343.00"
);
const transfer3 = new Transfer(
  "17/07/2022",
  "12:18",
  "Transferencia recibida",
  "$ 20.000.00",
  "$ 115.343.00"
);

//Función últimos movimientos
function mostrarMovimientos() {
 alert("Movimiento 1 de 3 " + JSON.stringify (movement1, null, 4));
 alert("Movimiento 2 de 3 " + JSON.stringify (movement2, null, 4));
 alert("Movimiento 3 de 3 " + JSON.stringify (movement3, null, 4));
}

//Función pagos
function mostrarPagos() {
  alert("Operación 1 de 3 " + JSON.stringify (pago1, null, 4));
  alert("Operación 2 de 3 " + JSON.stringify (pago2, null, 4));
  alert("Operación 3 de 3 " + JSON.stringify (pago3, null, 4));
}

//Funcion Transferencia
function mostrarTransfer() {
  alert("Transferencia 1 de 3 " + JSON.stringify (pago1, null, 4));
  alert("Transferencia 2 de 3 " + JSON.stringify (pago2, null, 4));
  alert("Transferencia 3 de 3 " + JSON.stringify (pago3, null, 4));
}

//Funcion nueva operacion
function continuar() {
  let continuo = prompt("Desea resalizar otra operacion? S/N: ");
  if (continuo == "S" || continuo == "s") {
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
    );
  } else if (continuo == "n" || continuo == "N") {
    seleccion = "4";
  } else {
    alert("Elija una opción valida");
    seleccion = prompt(
      "Seleccione la operación deseada: \n1) Últimos Movimientos \n2) Pago Mis Cuentas \n3) Transferencias \n4) Salir "
    );
  }
}

//Función para salir del sistema
function salir() {
  return alert("Gracias por utilizar nuestros servicios.");
}

//Programa principal
while (seleccion != "4") {
  switch (seleccion) {
    case "1":
      mostrarMovimientos();
      break;

    case "2":
      mostrarPagos();
      break;

    case "3":
      mostrarTransfer();
      break;

    default:
      alert("Opcion inválida. Vuelva a intentarlo.");
      break;
  }
  continuar();
}

salir();
