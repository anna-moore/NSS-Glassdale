//this module renders the already translated json-> javascripts onto the DOM

import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

//listen for event 
const eventHub = document.querySelector(".container")
const criminalElement = document.querySelector(".criminalsContainer")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        
         // Filter the criminals application state down to the people that committed the crime
         //update appStateCriminals with list of criminals
        const crimes = useConvictions()
        
        //reference property on the object 
        let crime = crimes.find(crimeObject => crimeObject.id === parseInt(event.detail.crimeThatWasChosen))
        let appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(criminal =>{
            
            return criminal.conviction === crime.name
        })

       render(matchingCriminals)
    }
})

//gather data
//find location on the DOM
//HTML formatting for each using criminal function
const render = criminalCollection => {
    let criminalCard = []
    for (const person of criminalCollection){
        criminalCard.push(Criminal(person))
    }
   
    criminalElement.innerHTML = criminalCard.join("")
}

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            let appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}

//refactor to use render function 
// export const CriminalList = () => {
//     getCriminals().then(()=>{
//         const criminalArray = useCriminals()
//         const contentElement = document.querySelector(".criminalsContainer")

//         for(let criminalObject of criminalArray){
//             const criminalHTML = Criminal(criminalObject)
//             contentElement.innerHTML += criminalHTML
//         }
//     })
// }
