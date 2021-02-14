import { Transporte } from "./Transporte";

export abstract class Logistica {

  protected abstract crearTransporte(): Transporte;

  public entrega(direccion: string): string {
    const t: Transporte = this.crearTransporte();
    return `Realizando la entrega: ${t.entregar(direccion)}`
  }

}
