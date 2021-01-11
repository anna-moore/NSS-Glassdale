import { WitnessHTMLConverter } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { CriminalList } from "../criminals/CriminalList.js"
import { ShowWitnessButton } from "./showWitnessStatementBtn.js";

const eventHub = document.querySelector(".container");
const targetListContainer = document.querySelector(".contentContainer");
let visible = false

//add an event listener to the witness button 
eventHub.addEventListener("witnessListGenerator" , e => {
//    if(visible){
//      WitnessDisplay()  
//    }
   if(!visible){
    WitnessDisplay()
    visible = true
    ShowWitnessButton()
    }else{
    CriminalList()
    visible = false
    ShowWitnessButton()
    }
}) 
let appStateWitnesses = []


export const WitnessDisplay = () => {
    // Trigger fetching the API data and loading it into application state
    targetListContainer.innerHTML = "";
    getWitnesses()
        .then( () => {
        // Get all convictions from application state
        appStateWitnesses = useWitnesses()
        render()
        })
}


//render a list of witnessObject onto the DOM
const render = () => {
    
    targetListContainer.innerHTML = appStateWitnesses.map( (w) => WitnessHTMLConverter(w)).join("")
}