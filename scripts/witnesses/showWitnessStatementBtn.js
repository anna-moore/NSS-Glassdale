


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
eventHub.addEventListener("click", event => {

    
    if (event.target.id === "showWitness") {
        // Create customwitnessListGenerateEvent event. Provide an appropriate name.
        const witnessListGenerateEvent = new CustomEvent("witnessListGenerator" //, {
        //     detail: {
        //         witness: event.target.value
        //     }
        // }
        )

        // Dispatch to event hub
        eventHub.dispatchEvent(witnessListGenerateEvent)
    }
})