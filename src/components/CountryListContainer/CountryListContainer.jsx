import './CountryListContainer.css'
import CountryList from "../CountryList/CountryList"
import { useState, useEffect } from "react"
import Loading from "../../components/Loading/Loading"

function CountryListContainer () {

    const [originalData, setOriginalData] = useState([])
    const [data, setData] = useState(null)
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [activeFilter, setActiveFilter] = useState("name")

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

    const sortByPopulation = () => {
        const sortedData = [...data].sort((a, b) => b.population - a.population)
        setData(sortedData)
        setActiveFilter("population")
    }
    
    const sortByArea = () => {
        const sortedData = [...data].sort((a, b) => b.area - a.area)
        setData(sortedData)
        setActiveFilter("area")
    }

    const sortByName = () => {
        setData(originalData)
        setActiveFilter("name")
    }

    const buttonClass = (key) => {
        return activeFilter === key ? "active" : null
    }

    if (loading) return <Loading />

    return (
        <section className="country-list-container">
            <input type="search" placeholder="Buscar país..." value={search} onChange={handleSearch} />
            <div className="sort">
                <h3>Ordenar por</h3>
                <div className="sort-btns">
                    <button className={buttonClass("name")} onClick={sortByName}>Nombre</button>
                    <button className={buttonClass("area")} onClick={sortByArea}>Área (km²)</button>
                    <button className={buttonClass("population")} onClick={sortByPopulation}>Población</button>
                </div>
            </div>
            {data.length === 0 ? <p>País no encontrado</p> : <CountryList data={data} />}
        </section>
        
    )
}

export default CountryListContainer