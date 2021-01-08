//this module takes in the witness list from the api
//translates json to javascript 
//creates a slice of the witness array

//initialize empty array to hold witnesses
let witness = []

//function to return list of witnesses
export const useWitnesses = () => witness.slice()

//load database state into application state with fetch
//make sure the 
export const getWitnesses = ("https://criminals.glassdale.us/witnesses") => {
    return fetch()
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            console.table(parsedWitnesses)
            witness = parsedWitnesses
        }
    )
}