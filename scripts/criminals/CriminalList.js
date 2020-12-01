//this module renders the already translated json-> javascripts onto the DOM

import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from "./Criminal.js"
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
