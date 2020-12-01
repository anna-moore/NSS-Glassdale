//this module 
//create empty array
let officers = []

//return copy of array
export const useOfficers = () => {
    return officers.slice()
}

//gather info from API and place in table
export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers
            }
        )
}