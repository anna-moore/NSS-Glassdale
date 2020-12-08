//convert javasctip/json to html 
//preparing to show on the DOM
export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__text">${ noteObject.noteText }</div>
            <div class="note__suspect">Title: ${ noteObject.suspect }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
        </section>
    `
}