
import { Transporte } from './Transporte';

export class TransporteTierra implements Transporte {
  entregar(direccion: string): string {
    return `Transporte realizado por tierra en la direccion ${direccion}`;
  }
}
