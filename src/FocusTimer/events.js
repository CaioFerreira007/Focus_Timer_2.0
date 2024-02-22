import { controls} from "./elements.js"
import * as actions from './actions.js'
export function registerControls(){

    controls.addEventListener("click", (event) =>{
       const action = event.target.dataset.action

       if(typeof actions[action] != "function"){ //se actions[action] não for uma função, return ou pare a aplicação!
        return
       }
       actions[action]()
       
    })

    actions.ToggleClick()
}
