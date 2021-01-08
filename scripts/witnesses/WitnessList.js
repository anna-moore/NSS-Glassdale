import { getWitnesses, useWitnesses } from "./WitnessProvider.js"






export const WitnessList = () => {
    // let witness = useWitnesses()
    getWitnesses()
        .then(() => {
            const allwitnesses = useWitnesses()
            render(allwitnesses, witness)
        })
}