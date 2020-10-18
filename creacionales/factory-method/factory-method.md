# Factory Method
También llamado: Método fábrica o constructor virtual.

Proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que crearán.

## Problema
Queremos que nuestra aplicación pueda gestionar 1 o N tipos del mismo producto. Cada producto se construye de una forma diferente pero queremos que nuestra aplicación no dependa de cada una de las formas de creación de los diferentes productos.

Ejemplo:
- Aplicación de logística con varios métodos de transporte:
  - Barco
  - Avión
  - Camión
- En una fábrica de hornos tenemos distintos tipos de hornos:
  - Pirolíticos
  - Aqualisis

## Estructura
1. El **Producto** declara la interfaz común a todos los objetos que puede producir la clase creadora y sus subclases.
2. Los **Productos concretos** son distintas implementaciones de la interfaz del producto.
3. La clase **Creadora declara** el método de creación de los distintos Productos. Es importante que devuelva la interfaz del producto.
   
   Esta clase también tiene responsabilidad en implementar cierta lógica de negocio centralizada y común a todos los productos. **El FACTORY METHOD ayuda a separar la lógica de las clases concretas de producto.**
  
4. Los **Creadores concretos** sobrescriben el método de creación que devuelve un tipo diferente de producto.

## Pros y contras
### Pros
- Evitar acoplamiento fuerte entre el creador y los productos concretos
- Principio de responsabilidad única
- Principio de abierto/cerrado

### Contras
- Puede que el código se complique por la cantidad de subclases nuevas

Ejemplo conceptual: https://refactoring.guru/es/design-patterns/factory-method/typescript/example
