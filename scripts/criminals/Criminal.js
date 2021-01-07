//translate javascipt into HTML

// export const Criminal = (criminal) =>{
//     return `<section class="criminalList">
//         <h2 class="name">${criminal.name} </h2>
//         <div class="age">Age: ${criminal.age} </div>
//         <div class="crime">Crime: ${criminal.conviction} </div>
//         <div class="dateStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} </div>
//         <div class="dateEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')} </div>
//         <button class= "alibi" id="associates--${criminal.id}">Associate Alibis</button>
//     </section>`
// }

//refactored to display facilites of slavery
export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal criminalList">
        <h2>${criminalObject.name}</h2>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h3>Facilities</h3>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}

const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("click", clickEvent => {
        // //an array of two string 
        // let id = clickEvent.target.id.split("--")[1]
        //another way 
        // destructed the array = split on a string to return an array 
        //return an index on the array
        const[tag, id] =clickEvent.target.id.split("--")
    // Only do this if the `crimeSelect` element was changed
    if (clickEvent.target.id.startsWith("associates--")) {
        // Create custom event. Provide an appropriate name.
        const abiliEvent = new CustomEvent("associatesBtnClicked", {
            detail: {
                clickedCriminalId: id
            }
        })

        // Dispatch to event/specific id of criminal hub
        eventHub.dispatchEvent(abiliEvent)
    }
})

    