import './CountryCard.css'

function CountryCard ( {flag, alt, population, timezones, languages, currencies, capital} ) {

    return (
        <section className="country-card">
            <img src={flag} alt={alt} />
        </section>
    )
}

export default CountryCard