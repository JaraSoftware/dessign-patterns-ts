
import { Transporte } from './Transporte';

export class TransporteAire implements Transporte {
  entregar(direccion: string): String {
    return `Transporte realizado por aire en la direccion: ${direccion}`;
  }
}
