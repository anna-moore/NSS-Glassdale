const abiliTarget = document.querySelector(".abili")

export const Abili = () =>{
    const criminalArray = useCriminals()
    const criminalAbili = criminalArray.find( (criminalObject => 
        criminalObject.id === parseInt(nameofevent.detail.)))
        abiliTarget.innerHTML = `
        <article class="abili">
            <ul>
                ${
                    criminalAbili.map(name => 
                        `<li>Name: ${name.name}</li>
                        <li>Abili: ${name.abili}</li>
                        `
                    )
                }
            </ul>
        </article>`


}

//set up to listen to the event 
//intake criminal id
//find criminal with the matching id
//map with 
//create new DOM element <aside>??
//dialogue box