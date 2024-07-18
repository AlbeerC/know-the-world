import CountryList from "../CountryList/CountryList"
import { useState, useEffect } from "react"

function CountryListContainer () {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <h2>Loading...</h2>

    return (
        <CountryList data={data} />
    )
}

export default CountryListContainer