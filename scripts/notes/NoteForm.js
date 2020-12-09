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
        <input type= "type" id="author" placeholder="Author"></input>
        <textarea id = "text" placeholder="description"></textarea>
        <input type="text" id="suspect" placeholder="suspect name"></input>
        <button id="saveNote">Save Note</button>
    `
}


export const NoteForm = () => {
    render()
}