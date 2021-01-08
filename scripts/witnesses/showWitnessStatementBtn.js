const contentTarget = document.querySelector(".facility__button")

const eventHub = document.querySelector(".container")
let visible = false
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