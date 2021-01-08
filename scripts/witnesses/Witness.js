import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")


let visible = false
// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "witnessBtn") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("witnessBtn", {
            detail: {
                witness: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


export const WitnessDisplay = () => {
    // Trigger fetching the API data and loading it into application state
    getWitnesses()
        .then( () => {
        // Get all convictions from application state
        let witness = useWitnesses()
        render(witness)
        })
}


//button shows up on DOM
export const ShowWitnessButton = () => {
    if(!visible){
      contentTarget.innerHTML = "<button id='showWitness'>Show Witnesses</button>"  
      visible= false
    }else{
        contentTarget.innerHTML = "<button id='showWitness'>Show Witnesses</button>" 
        visible = true
    }
    
}

