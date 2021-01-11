//render the show witness button

//set up location on the DOM
//set up connection to the eventHub
const contentTarget = document.querySelector(".facility__button");
const eventHub = document.querySelector(".container");

let visible = false;

//button shows up on DOM
export const ShowWitnessButton = () => {
  if (visible) {
    contentTarget.innerHTML = "<button id='showWitness'>Show Criminals</button>";
  } else {
    contentTarget.innerHTML =
      "<button id='showWitness'> Show Witness</button>";
  }
  visible = !visible;
};

// On the event hub, listen for a "click" event.
eventHub.addEventListener("click", (event) => {
  if (event.target.id === "showWitness") {
    // Create customwitnessListGenerateEvent event. Provide an appropriate name.
    const witnessListGenerateEvent = new CustomEvent("witnessListGenerator");

    // Dispatch to event hub
    eventHub.dispatchEvent(witnessListGenerateEvent);
  }
});
