export const getCurrencies = (data) => {
    const currencies = data.currencies ? Object.keys(data.currencies).map(key => data.currencies[key]) : []
  
    if (currencies.length === 0) {
      return "Not found"
    }
  
    const validCurrencies = currencies.filter(currency => currency.name && currency.symbol)
  
    if (validCurrencies.length > 0) {
      return validCurrencies
    }
  
    return "Not found"
  }
  
export const getCapital = (data) => {
    if (data.capital && data.capital.length > 1) {
        return data.capital.slice(0, 1)
    } else if (data.capital && data.capital.length === 1) {
        return data.capital
    }

    return " "
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