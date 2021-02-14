
import { EventListener } from "./EventListener";

export class LikesListener implements EventListener {
   
    notify() {
        console.log('Like!');
    }

}

