//this module renders the already translated json-> javascripts onto the DOM
//show criminals based on requested data
import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { AssociatesDialog } from "./Alibi.js"

//listen for event 
const eventHub = document.querySelector(".container")
const criminalElement = document.querySelector(".criminalsContainer")


eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    if(event.detail.officer !== "0"){
        const officerList = useOfficers()
        let officer = officerList.find(officerObject => officerObject.id === parseInt(event.detail.officer))
        // const officerName = event.detail.officer

        // How can you get the criminals that were arrested by that officer?
        
        const criminalList = useCriminals()
        const matchingCriminals= criminalList.filter(criminalObject => {
                if (criminalObject.arrestingOfficer === officer.name) {
                    return true 
                }             
            })
            //call render outside of filter method 
            //past error calling matchingCriminals while still naming 
            render(matchingCriminals) 
    } 
})



// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        
         // Filter the criminals application state down to the people that committed the crime
         //update appStateCriminals with list of criminals
        const crimes = useConvictions()
        let crime = crimes.find(crimeObject => crimeObject.id === parseInt(event.detail.crimeThatWasChosen))
        
        //reference property on the object 
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
   
    criminalElement.innerHTML = `${criminalCard.join("")} ${AssociatesDialog()}`
}

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            let appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}


