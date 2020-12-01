//this module takes in the criminal list from the array
//translates json to javascript with a asynchronous function
//create a slice of the criminal array

//initialize empty array to hold criminals
let criminals = []

//function to return list of criminals
export const useCriminals = () => criminals.slice()

//Load database state into application state with a fetch().
// Make sure the last then() updates the criminals array
//get criminals returns what fetch returns
export const getCriminals = () => {
   
   return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )

}