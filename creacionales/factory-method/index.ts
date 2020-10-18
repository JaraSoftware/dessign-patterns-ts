
/**
 * Aplicación de logística.
 * Tiene que entregar un paquete y tiene distintas formas de enviarlo: tierra (camión) o aire (avión)
 * Se propone implementar el patrón Factory-method puesto que es posible que en un futuro se incluya el envío por mar (Barco)
 */

import { Logistica } from "./Logistica";
import { LogisticaAire } from "./LogisticaAire";
import { LogisticaTierra } from "./LogisticaTierra";

function realizarEnvio(logistica: Logistica, direccion: string) {
  console.log(logistica.entrega(direccion));
}

const envioAire: LogisticaAire = new LogisticaAire();
realizarEnvio(envioAire, "C/ de la Piruleta, 39");


const envioTierra: LogisticaTierra = new LogisticaTierra();
realizarEnvio(envioTierra, "C/ de la Piruleta, 66");
