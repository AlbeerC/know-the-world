import './FloatingCard.css'
import numeral from 'numeral'

function FloatingCard ( {data, currencies, timezones, languages, capital} ) {

    return (
        <section className="country-card">
            <h1>{data.name.common}</h1>
            <h2> <span>* </span> Informative card <span> *</span> </h2>
            <div className="info">
                <img src={data.flags.png} alt={data.flags.alt} />
                <div className="list">
                    <div className="item">
                        <span>Capital</span>
                        <p>{capital}</p>
                    </div>
                    <div className="item">
                        <span>Población</span>
                        <p>{numeral(data.population).format(0.0)}</p>        
                    </div>
                    <div className="item">
                        <span>Moneda</span>
                        <p>{currencies[0].symbol} {currencies[0].name}</p>
                    </div>
                    <div className="item">
                        <span>Idioma principal</span>
                        <p>{languages}</p>
                    </div>
                    <div className="item">
                        <span>Área</span>
                        <p>{numeral(data.area).format(0,0)} km²</p>
                    </div>
                    <div className="item">
                        <span>Zona horaria</span>
                        <p>{timezones}</p>
                    </div>
                </div>
            </div>
            <h3 className='continent'>{data.continents}</h3>
        </section>
    )
}

export default FloatingCard