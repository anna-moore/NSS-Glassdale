import { WitnessHTMLConverter } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const eventHub = document.querySelector(".container");
const targetListContainer = document.querySelector(".contentContainer");

//add an event listener to the witness button 
eventHub.addEventListener("witnessListGenerator" , e => {
    WitnessDisplay()
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
    // const witnessStatementHTML = witnessStatements.map( (witnessStatement) => WitnessHTMLConverter(witnessStatement)
    // ).join("")
    // targetListContainer.innerHTML = witnessStatementHTML
    targetListContainer.innerHTML = appStateWitnesses.map( (w) => WitnessHTMLConverter(w)).join("")
}