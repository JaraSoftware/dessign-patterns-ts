import { Logistica } from "./Logistica";
import { Transporte } from "./Transporte";
import { TransporteAire } from "./TransporteAire";

export class LogisticaAire extends Logistica {
  public crearTransporte(): Transporte {
    const t: Transporte = new TransporteAire();
    return t;
  }
}
