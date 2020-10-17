import { Persona } from "./Persona";

const Luis = new Persona.Builder("Luis")
  .setMunicipio("Municipio de Luis")
  .setMayor(26)
  .setLugarTrabajo("Trabajo de Luis")
  .build();

const Luisa = new Persona.Builder("Luisa")
  .setMunicipio("Municipio de Luis")
  .setMenor(17)
  .setColegio("Colegio de Luisa")
  .build();

console.log(Luis);
console.log(Luisa);
