//this module takes in the witness list from the api
//translates json to javascript 
//creates a slice of the witness array

//initialize empty array to hold witnesses
let witness = []

//function to return list of witnesses
export const useWitnesses = () => witness.slice()

//load database state into application state with fetch
//make sure the 
export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            console.table(parsedWitnesses)
            witness = parsedWitnesses
        }
    )
}

// TODO 
// ✅  create a witness provider
// create a html converter
// create witnessList.js
//disbatch event that the witness btn is clicked
//style witness cards?