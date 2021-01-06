//convert javasctip/json to html 
//preparing to show on the DOM
export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <h3 class="note__text">${ noteObject.text }</h3>
            <div class="note__suspect">Title: ${ noteObject.criminalName}</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Date: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}