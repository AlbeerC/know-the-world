import './CountryList.css'
import { getCapital, getCurrencies, getLanguages } from '../../helpers/countryProperties'
import CountryCard from '../CountryCard/CountryCard'

function CountryList ( {data} ) {

    return (
        <section className="country-list">
            {data.map((country) => (
                <CountryCard key={country.name.common}
                    name={country.name.common}
                    capital={getCapital(country)}
                    currencies={getCurrencies(country)}
                    languages={getLanguages(country)}
                    flag={country.flags.png}
                    alt={country.flags.alt}
                    population={country.population}
                    area={country.area}
                    
                />
            ))}
        </section>
    )
}

export default CountryList