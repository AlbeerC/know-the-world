import { useEffect } from "react"
import { useState } from "react"
import FloatingCard from "../FloatingCard/FloatingCard"
import { getCurrencies, getCapital, getTimezones, getLanguages } from '../../helpers/countryProperties'

function FloatingCardContainer ( {selectedCountry} ) {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${selectedCountry}`)
            .then((response) => response.json())
            .then((data) => setData(data[0]))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [selectedCountry])

    if (loading) return <h2>Cargando...</h2>


    return (
        <FloatingCard 
            data={data}
            capital={getCapital(data)}
            currencies={getCurrencies(data)}
            timezones={getTimezones(data)}
            languages={getLanguages(data)}
        />
    )

}

export default FloatingCardContainer