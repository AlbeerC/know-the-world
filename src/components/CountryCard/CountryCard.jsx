
function CountryCard ( {data} ) {

    return (
        <section className="country-card">
            <h1>{data.name.common}</h1>
            <h2>{data.capital}</h2>
            <p>{data.continents}</p>
            <p>{data.population}</p>
            <img src={data.flags.png} alt={data.flags.alt} />
        </section>
    )
}

export default CountryCard