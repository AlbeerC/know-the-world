import './CountryListContainer.css'
import CountryList from "../CountryList/CountryList"
import { useState, useEffect } from "react"
import { getCapital } from '../../helpers/countryProperties'

function CountryListContainer () {

    const [originalData, setOriginalData] = useState([])
    const [data, setData] = useState(null)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const sortedData = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
                setData(sortedData)
                setOriginalData(sortedData)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (searchTerm) => {
        const searchResults = originalData.filter((element) => {
            if(element.name.common.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                return element
            }
        })
        setData(searchResults)
    }

    if (loading) return <h2>Loading...</h2>

    return (
        <section className="country-list-container">
            <input type="search" placeholder="Buscar país..." value={search} onChange={handleSearch} />
            {data.length === 0 ? <p>País no encontrado</p> : <CountryList data={data} />}
        </section>
        
    )
}

export default CountryListContainer