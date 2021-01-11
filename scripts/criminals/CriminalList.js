//this module renders the already translated json-> javascripts onto the DOM
//show criminals based on requested data
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";
import { Criminal } from "./Criminal.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { useOfficers } from "../officers/OfficerProvider.js";
import { AssociatesDialog } from "./Alibi.js";
import { getFacilities, useFacilities} from "../facility/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities} from "../facility/CriminalFacilityProvider.js";

//listen for event
const eventHub = document.querySelector(".container");
const criminalElement = document.querySelector(".contentContainer");

//global component variables 
let criminals = []
let facilities = []
let criminalFacilities = []

eventHub.addEventListener("officerSelected", (event) => {
  // How can you access the officer name that was selected by the user?
  if (event.detail.officer !== "0") {
    const officerList = useOfficers();
    let officer = officerList.find(
      (officerObject) => officerObject.id === parseInt(event.detail.officer)
    );
    // const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?

    const criminalsToFilter = criminals.slice();
    const matchingCriminals = criminalsToFilter.filter((criminalObject) => {
      if (criminalObject.arrestingOfficer === officer.name) {
        return true;
      }
    });
    //call render outside of filter method
    //past error calling matchingCriminals while still naming
    render(matchingCriminals);
  }
});

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", (event) => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0") {
    // Filter the criminals application state down to the people that committed the crime
    //update appStateCriminals with list of criminals
    const crimes = useConvictions();
    let crime = crimes.find(
      (crimeObject) =>
        crimeObject.id === parseInt(event.detail.crimeThatWasChosen)
    );

    //reference property on the object
    let criminalsToFilter = criminals.slice();
    const matchingCriminals = criminalsToFilter.filter((criminal) => {
      return criminal.conviction === crime.name;
    });

    render(matchingCriminals);
  }
});


const render = (criminalList) => {
    // Step 1 - Iterate all criminals
    criminalElement.innerHTML = criminalList.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const matchingFacilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, matchingFacilities)
        }
    ).join("") 
}
// Render ALL criminals initally
export const CriminalList = () => {
  getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
      // Pull in the data now that it has been fetched
       criminals = useCriminals();
       facilities = useFacilities();
       criminalFacilities = useCriminalFacilities();

      // Pass all three collections of data to render()
      render(criminals);
    });
};


//gather data
//find location on the DOM
//HTML formatting for each using criminal function
// const render = (criminalCollection) => {
//   let criminalCard = [];
//   for (const person of criminalCollection) {
//     criminalCard.push(Criminal(person));
//   }

//   criminalElement.innerHTML = `${criminalCard.join("")} ${AssociatesDialog()}`;
// };