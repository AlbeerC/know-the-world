export const getCurrencies = (data) => {
    return data.currencies ? Object.keys(data.currencies).map(key => data.currencies[key]) : []
}

export const getCapital = (data) => {
    return data.capital && data.capital.length > 1 ? data.capital.slice(0, 1) : data.capital
}

export const getTimezones = (data) => {
    if (data.timezones && data.timezones.length > 2) {
        const mainTimezone = data.timezones[Math.round(data.timezones.length / 2)]
        return (`${mainTimezone}...`)
    } else {
        const timezonesList = data.timezones.join(", ")
        return timezonesList
    }
}

export const getLanguages = (data) => {
    let languagesList = data.languages ? Object.keys(data.languages).map(key => data.languages[key]) : []
    
    if (languagesList.length > 2) {
        languagesList = languagesList.slice(0, 2)
    }

    return (languagesList.map(lang => lang).join(", "))
}