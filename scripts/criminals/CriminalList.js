//this module renders the already translated json-> javascripts onto the DOM

import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js"

//listen for event 
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        
         // Filter the criminals application state down to the people that committed the crime
         //update appStateCriminals with list of criminals
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(currentCrime =>{
            
            return appStateCriminals.conviction === currentCrime

        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})
//gather data
//find location on the DOM
//HTML formatting for each 
export const CriminalList = () => {
    getCriminals().then(()=>{
        const criminalArray = useCriminals()
        const contentElement = document.querySelector(".criminalsContainer")

        for(let criminalObject of criminalArray){
            const criminalHTML = Criminal(criminalObject)
            contentElement.innerHTML += criminalHTML
        }
    }
        /*
            Now that you have the data, what
            component should be rendered?
        */
       
    )
}
