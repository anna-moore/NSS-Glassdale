import { saveNote } from "./NoteProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

//event to save a new note
eventHub.addEventListener("click" , clickEvent =>{
    if(clickEvent.target.id === "saveNote"){
        const author= document.querySelector("#author").value
        const text= document.querySelector("#text").value
        const suspect= document.querySelector("#suspect").value


        const newNote = {

            timestamp: Date.now(),
            author: author,
            text: text,
            suspect: suspect    
        }
        saveNote(newNote)
    }
})


//create form 
const render = () => {
    contentTarget.innerHTML = `
        <h2 class="formHeader">New Form</h2>
        <input type= "text" id="author" class= "form" placeholder="Author Name"></input>
        <input type="text" class= "form" id="suspect" placeholder="Suspect Name"></input>
        <textarea id = "text"  class= "form" placeholder="description"></textarea>
        <button id="saveNote">Save Note</button>
    `
}


export const NoteForm = () => {
    render()
}