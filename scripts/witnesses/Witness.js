import { getWitnesses, useWitnesses } from "./WitnessProvider.js"




//there is no render function right now 
//🙃🙃🙃🙃🙃🙃🙃🙃🙃
export const WitnessDisplay = () => {
    // Trigger fetching the API data and loading it into application state
    getWitnesses()
        .then( () => {
        // Get all convictions from application state
        let witness = useWitnesses()
        render(witness)
        })
}




export const WitnessHTMLConverter = (witnessObj) => {
    return `<section>
    
    </section>
    `
}