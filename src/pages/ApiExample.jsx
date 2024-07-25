import { useEffect, useState } from "react"


const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
export function ApiExample() {
    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(data => {
            const { fact } = data
            setFact(fact)
            console.log(fact)
        })
    }, [])
    return (
        <main>
            <h1>{fact}</h1>

        </main>)
}