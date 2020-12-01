//this module 

//initialize empty array to hold criminals
let criminals = []

//function to return list of crimals
export const useCriminals = () => criminals.slice()

//Load database state into application state with a fetch().
// Make sure the last then() updates the criminals array
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