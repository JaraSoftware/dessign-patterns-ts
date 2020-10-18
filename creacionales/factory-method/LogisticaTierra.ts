import { Logistica } from "./Logistica";
import { Transporte } from "./Transporte";
import { TransporteTierra } from "./TransporteTierra";

export class LogisticaTierra extends Logistica {
  public crearTransporte(): Transporte {
    const t: Transporte = new TransporteTierra();
    return t;
  }
}

