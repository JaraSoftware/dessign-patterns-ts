# Observer
También llamado: Observador, publicación-suscripción, Listener

Es un patrón de diseño de **comportamiento** que permite definir un mecanismo de notificación a varios objetos sobre cualquier evento que ocurra en el objecto que se esté observando.

## Estructura

1. El **Notificador** envía eventos de interés a otros objetos. Este componente tiene un mecanismo de suscripción que permite unirse o abandonar la lista de suscriptores.
2. Cuando sucede un evento, el Notificador se recorre la lista de suscripción e invoca el método de notificación declarado en la interfaz suscriptora.
3. La interfaz **Suscriptora** declara la interfaz de notificación.
4. Los **Suscriptores Concretos** realizan acciones en respuesta a la notificación emitida por el notificador. Deben implementar la misma interfaz.
5. Los suscriptores necesitarán cierta información de contexto para manejar la actualización. A menudo los notificadores pasan dicha información o incluso se pasan a sí mismos para que los suscriptores extraigan la información.
6. El **Cliente** crea objetos de tipo notificador y suscriptor por separado y después registra a los suscriptores para las actualizaciones del notificador.

## Pros y contras
### Pros
- Respeta el principio de abierto/cerrado
- Puedes establecer relaciones entre objetos en tiempo de ejecución
### Contras
- Los suscriptores son notificados en un orden aleatorio