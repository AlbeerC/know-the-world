import { useEffect } from "react"
import { useState } from "react"
import CountryCard from "../CountryCard/CountryCard"

function CountryCardContainer ( {selectedCountry} ) {

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

    
    const currencies = data.currencies ? Object.keys(data.currencies).map(key => data.currencies[key]) : []

    const timezones = () => {
        if (data.timezones && data.timezones.length > 2) {
            const mainTimezone = data.timezones[Math.round(data.timezones.length / 2)]
            return (`${mainTimezone}...`)
        } else {
            const timezonesList = data.timezones.join(", ")
            return timezonesList
        }
    }

    const languages = () => {
        let languagesList = data.languages ? Object.keys(data.languages).map(key => data.languages[key]) : []
        
        if (languagesList.length > 2) {
            languagesList = languagesList.slice(0, 2)
        }

        return (languagesList.map(lang => lang).join(", "))
    }

    return (
        <CountryCard 
            data={data}
            currencies={currencies}
            timezones={timezones()}
            languages={languages()}
        />
    )

}

export default CountryCardContainer