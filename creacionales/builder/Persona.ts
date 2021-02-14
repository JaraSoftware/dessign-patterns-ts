export class Persona {
  private nombre: string;
  private edad: Number;
  private municipio: string;
  private lugarTrabajo: string;
  private colegio: string;

  static Builder = class Builder {
    private persona: Persona;

    constructor(nombre: string) {
      this.persona = new Persona();
      this.persona.nombre = nombre;
    }

    setMayor(edad: Number) {
      if (edad < 18)
        throw new Error("Para ser mayor tiene que tener más de 18 años");
      this.persona.edad = edad;

      return new Persona.BuilderMayor(this.persona);
    }

    setMenor(edad: Number) {
      if (edad >= 18)
        throw new Error("Para ser menor tiene que tener menos de 18 años");
      this.persona.edad = edad;

      return new Persona.BuilderMenor(this.persona);
    }

    setMunicipio(municipio: string): Builder {
      this.persona.municipio = municipio;
      return this;
    }
  };

  static BuilderMayor = class BuilderMayor {
    private persona: Persona;

    constructor(persona: Persona) {
      this.persona = persona;
    }

    setLugarTrabajo(trabajo: string): BuilderMayor {
      this.persona.lugarTrabajo = trabajo;
      this.persona.colegio = null;
      return this;
    }

    build(): Persona {
      return this.persona;
    }
  };

  static BuilderMenor = class BuilderMenor {
    private persona: Persona;

    constructor(persona: Persona) {
      this.persona = persona;
    }

    setColegio(colegio: string): BuilderMenor {
      this.persona.colegio = colegio;
      this.persona.lugarTrabajo = null;
      return this;
    }

    build(): Persona {
      return this.persona;
    }
  };
}
