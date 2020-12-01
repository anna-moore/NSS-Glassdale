//translate javascipt into HTML

export const Criminal = (criminal) =>{
    return `<section class="criminalList">
        <h2 class="name">${criminal.name} </h2>
        <div class="age">Age: ${criminal.age} </div>
        <div class="crim">Crime: ${criminal.conviction} </div>
        <div class="dateStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} </div>
        <div class="dateEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')} </div>

    </section>`
}


    