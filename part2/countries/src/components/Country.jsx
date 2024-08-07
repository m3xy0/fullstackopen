const Country = ({ oneCountry }) => {
    const languageKeys = oneCountry.length === 0 ? null : Object.keys(oneCountry.languages)
    if(oneCountry.length === 0) {
        return null
    }
    
    return (
        <div>
            <h1>{oneCountry.name.common}</h1>
            <p>capital {oneCountry.capital[0]}</p>
            <p>area {oneCountry.area}</p>
            <h3>languages:</h3>
            <ul>
                {languageKeys.map(key => <li key={key}>{oneCountry.languages[key]}</li>)}
            </ul>
            <img
                src={oneCountry.flags.svg}
                alt={oneCountry.flags.alt}
                style={{width: "20%", minWidth: "220px", height: "auto", border: "1px solid black"}}
            />
        </div>
    )
}

export default Country