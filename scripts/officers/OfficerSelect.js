// OfficerSelect component that renders a select HTML element
// which lists all officers in the Glassdale PD API

import { getOfficers, useOfficers } from "./OfficerProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

//listen for change on Event Hub
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getOfficers()
        .then( () => {
        // Get all Officers from application state
        let Officers = useOfficers()
        render(Officers)
        })
}

// Use interpolation here to invoke the map() method on
// the OfficerCollection to generate the option elements.
// Look back at the example provided above.
const render = OfficerCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select a officer...</option>
            ${
                OfficerCollection.map( OfficerObject => 
                    
                        `<option value ="${OfficerObject.id}"> ${OfficerObject.name} </option>`
                )  
            }
        </select>
    `
}