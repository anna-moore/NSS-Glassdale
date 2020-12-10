import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

//global value for is notes shown be shown
let visible = false

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

//listen for dispatched showNotesClicked and display the notes
eventHub.addEventListener("showNotesClicked", customEvent => {
    //the same thing as is visible === false
    if(!visible){
        NoteList()
        visible = true
    }else{
       contentTarget.innerHTML = "" 
       visible = false
    }
    
})

//automatically update when new list is added
eventHub.addEventListener("noteStateChanged", customEvent =>{
   if(visible){
      NoteList() 
   } 
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map( (note) =>
        // convert the notes objects to HTML with NoteHTMLConverter
        NoteHTMLConverter(note)

    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}