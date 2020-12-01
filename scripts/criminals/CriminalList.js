//this module renders the already translated json-> javascripts onto the DOM

import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from "./Criminal.js"
//gather data
//find location on the DOM
//HTML formatting for each 
    
export const CriminalList = () => {
    getCriminals().then(()=>{
        const contentElement = document.querySelector(".criminalsContainer")

        for(let criminalObject of criminals){
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
