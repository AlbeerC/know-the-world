import './CountryCard.css'
import numeral from 'numeral'

function CountryCard ( {flag, name, alt, population, languages, currencies, capital, area} ) {

    return (
        <section className="country-card">
            <img src={flag} alt={alt} />
            <h2>{name}</h2>
            <ul>
                <li>Capital: <span>{capital}</span></li>
                <li>Población: <span>{numeral(population).format(0.0)}</span></li>
                <li>Idioma/s: <span>{languages}</span></li>
                <li>Moneda: <span>{currencies[0].symbol}  {currencies[0].name}</span></li>
                <li>Área: <span>{numeral(area).format(0,0)} km²</span></li>
            </ul>
        </section>
    )
}

export default CountryCard