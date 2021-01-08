import { WitnessHTMLConverter } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"


//add an event listener



export const WitnessList = () => {
    
    getWitnesses()
        .then(() => {
            const allWitnesses = useWitnesses()
            render(allWitnesses)
        })
}

const render = (witnessStatements) => {
    const witnessStatementHTML = witnessStatements.map( (witnessStatement) => WitnessHTMLConverter(witnessStatement)
    ).join("")
    contentTarget.innerHTML = witnessStatementHTML
}