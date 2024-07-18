const { useEffect } = require("react");
const { useState } = require("react");

function CountryList () {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [])


}