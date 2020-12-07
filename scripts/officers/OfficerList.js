// import { getOfficers, useOfficers } from './OfficerProvider.js'
// import { useCriminals } from "../criminals/CriminalDataProvider.js"

// //listen for event 
// const eventHub = document.querySelector(".container")
// const criminalElement = document.querySelector(".criminalsContainer")

// eventHub.addEventListener("officerSelected", event => {
//     // How can you access the officer name that was selected by the user?
//     const officerName = event.detail.officer

//     // How can you get the criminals that were arrested by that officer?
//     const criminals = useCriminals()
//     let officer = criminals.find(criminalObject => criminalObject.id === parseInt(event.detail.selectedOfficer))
//     criminals.filter(
//         criminalObject => {
//             if (criminalObject.arrestingOfficer === officerName) {
//                 return true
//             }
//         }
//     )
// })



