import { saveNote } from "./NoteProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

//event to save a new note
eventHub.addEventListener("click" , clickEvent =>{
    if(clickEvent.target.id === "saveNote"){
        const author= document.querySelector("#author").value
        const text= document.querySelector("#text").value
        const criminalId= parseInt(document.querySelector("#suspect").value)


        const newNote = {
            timestamp: Date.now(),
            author: author,
            text: text,
            criminalId: criminalId   
        }
        saveNote(newNote)
    }
})


//create form 
const render = () => {
    const criminalsCollection = useCriminals()
    contentTarget.innerHTML = `
        <h2 class="formHeader">New Form</h2>
        <input type= "text" id="author" class= "form" placeholder="Author Name"></input>
        <textarea id = "text"  class= "form" placeholder="description"></textarea>
        <select class="dropdown" id="suspect">
            <option value="0">Please select a suspect...</option>
            ${
                criminalsCollection.map(
                  (criminal) => `
                    <option value=${criminal.id}>
                      ${criminal.name}
                    </option>
                `)
            }
        </select>
        <button id="saveNote">Save Note</button>
    `
}


export const NoteForm = () => {
    getCriminals()
    .then(() => render())
}