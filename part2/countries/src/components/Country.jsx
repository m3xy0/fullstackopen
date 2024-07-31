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
                {languageKeys.map(key => <li id={key}>{oneCountry.languages[key]}</li>)}
            </ul>
            <img src={oneCountry.flags.svg} style={{width: "20%", height: "auto"}}></img>
        </div>
    )
}

export default Country