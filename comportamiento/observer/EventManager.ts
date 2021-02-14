
import { EventListener } from './EventListener';

export class EventManager {

  private listeners: Map<string, [EventListener]>;

  constructor() {
    this.listeners = new Map<string, [EventListener]>();
  }

  subscribe(eventType: string, listener: EventListener) {
    if (this.listeners.has(eventType)) {
      this.listeners.get(eventType)?.push(listener);
    } else {
      this.listeners.set(eventType, [listener]);
    }
  }

  unsubscribe(eventType: string, listener: EventListener) {
    if (this.listeners.has(eventType)) {
      const eventListeners = this.listeners.get(eventType);
      const index = eventListeners?.indexOf(listener);
      if (index && eventListeners) {
        // TODO delete from eventListener list
      }
    }
  }

}
