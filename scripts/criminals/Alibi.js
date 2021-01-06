import { useCriminals } from "./CriminalDataProvider.js"

const eventHub = document.querySelector(".container")

// const dialogClose = document.querySelector("#closeDialog")
//close dialog is clicked 
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeDialog") {
    associatesDialog.close();
  }
})

eventHub.addEventListener("associatesBtnClicked", (event) => {
    const associatesDialog = document.querySelector("#associatesDialog")
    const dialogText = document.querySelector("#associatesDialog__text")
  
    // console.log('event al id', event.detail.clickedCriminalId);
  
    const clickedCriminal = useCriminals().find(
        (criminal) => criminal.id === parseInt(event.detail.clickedCriminalId)
      )
  
    dialogText.innerHTML =`
      <h3>Associates of ${clickedCriminal.name}</h3>
      ${clickedCriminal.known_associates.map( (associate) => `
        <h4>${associate.name}</h4>
        <div>${associate.alibi}</div>`
        ).join("")}`
  
    associatesDialog.showModal()
  })
  
  //html convert for the dialog box
  export const AssociatesDialog = () => {
      return `
      <dialog id="associatesDialog">
      <div id="associatesDialog__text"></div>
      <button id="closeDialog">close</button>
      </dialog>
      `
}
    
    // export const Abili = () => {
    
    //     const criminalArray = useCriminals()
    //     const criminalAbili = criminalArray.find( (criminalObject) => {
    
    //         criminalObject.id === parseInt(nameofevent.detail.value)
    //         abiliTarget.innerHTML = `
    //         <article class="abili" id="associatesDialog>
    //             <ul>
    //                 ${
    //                     criminalAbili.map(name => 
    //                         `<li>Name: ${name.name}</li>
    //                         <li>Abili: ${name.abili}</li>
    //                         `
    //                     )
    //                 }
    //             </ul>
    //         </article>`
    //     })
    // }

//set up to listen to the event 
//intake criminal id
//find criminal with the matching id
//map with 
//create new DOM element <aside>??
//dialogue box