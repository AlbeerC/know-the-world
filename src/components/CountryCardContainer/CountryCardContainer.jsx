import { useEffect } from "react"
import { useState } from "react"
import CountryCard from "../CountryCard/CountryCard"

function CountryCardContainer () {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/name/brasil')
            .then((response) => response.json())
            .then((data) => setData(data[0]))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <h2>Cargando...</h2>

    console.log(data)

    return (
        <CountryCard data={data}/>
    )

}

export default CountryCardContainer