//this pmodule takes in the crimes list from the array
// translates the json from the api to javascript with asynchronous function
// create a slice of the conviction array


//intialize and empty array
let convictions = []

//return a copy of the array
export const useConvictions = () => convictions.slice()

//load database state into application state with a fetch()
//make sure that last ".then()" set the local convivtions
//variable to what is in the response from the API.
export const getConvictions = () => {

    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedCrimes => {
                console.table(parsedCrimes)
                convictions = parsedCrimes
            }
        )
}