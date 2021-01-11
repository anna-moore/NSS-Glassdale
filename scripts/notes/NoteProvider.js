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

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
  }

// Edits the data in a JSON file, and then dispatches a custom event to the eventHub to refresh the notes array.
export const editNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note)
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent);
};

/*
*   Listens for the custom event "deleteNoteEvent" which invokes the function,
*   deleteNote, and then sets an updated array to render the note list again.
*/
eventHub.addEventListener("deleteNoteEvent", e => {
    deleteNote(e.detail.chosenNoteId)
});

// Listens for the custom event "editNoteEvent" which invokes the function editNote.
eventHub.addEventListener("editNoteEvent", e => {
    editNote(e.detail.note);
});

// Dispatches noteStateChanged to the eventHub so that getNotes will update the array notes.
// export const dispatchStateChangeEvent = () => {
//     const noteStateChangedEvent = new CustomEvent("noteStateChanged");
//     eventHub.dispatchEvent(noteStateChangedEvent);
// };