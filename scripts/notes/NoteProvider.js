//provides list of the notes
const eventHub = document.querySelector(".container")
let notes = []

//dispatch when an note has been added
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

//provide a copy on notes array
export const useNotes = () => notes.slice()


//get the note that is listed in the DOM
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

//method of POST is adding info not getting info
//sending json content type
//the info that we are sending in the POST is newnote in string
//HTTP perfers a string
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}