//render the show note button

//set up location on the DOM
//set up connection to the eventhub in container
const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")
let visible = false

//create a custum event that dispatches click of show notes
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

//button shows up on DOM
export const ShowNoteButton = () => {
    if(!visible){
      contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"  
      visible= false
    }else{
        contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>" 
        visible = true
    }
    
}
