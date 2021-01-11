//the purpose of this component is to render JS to HTML


export const WitnessHTMLConverter = (witnessObject) => {
    const [firstName, lastName] = witnessObject.name.split(" ");
    return `
    <div id="witness--${witnessObject.id}" class="witness">
        <h4 id="witness__${witnessObject.name}"><span class="bold">Name</span>: ${lastName}, ${firstName}</h4>
        <p><span class="bold">Statements</span>: ${witnessObject.statements}</p>
    </div>
    `
}