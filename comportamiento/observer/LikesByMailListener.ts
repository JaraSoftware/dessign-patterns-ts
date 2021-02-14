
import { EventListener } from "./EventListener";

export class LikesByMailListener implements EventListener {
    notify() {
        console.log('Enviando email al usuario informando del nuevo like')
    }
}
