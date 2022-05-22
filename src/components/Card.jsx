import React from 'react'

const Card = ({ city, setCity, result, getWeather}) => {

    // const { name } = result
    // const { temp, humidity } = result.main
    // const { speed } = result.wind
    // const { icon, description } = result.weather[0]

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getWeather();
        setCity("")
        return
    }

    

    // const textStyle = {
    //     color: `white`,
    //     fontSize: `1rem`,
    //     display: `inline-flex`,
    //     alignItems: `center`,
    //     justifyContent: `center`,
    //     fontWeight: `500`
    // }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="cardStyle">
                        <form onSubmit={handleSubmit} className="search">
                            <input placeholder="search for a city" value={city} onChange={(e) => setCity(e.target.value)} type="text" className="search-bar" />
                            <button className='' type="submit">
                                <svg className='' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                            </button>
                        </form>
                        {/* <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" /> */}
                        {(typeof result.main !== "undefined") ? (
                            <>
                                <div className="weather loading">
                                    <h3 className="city">Weather in {result.name}</h3>
                                    <div className="temp"><label htmlFor="" className="label">Temperature:</label> {Math.round(result.main.temp)}°C</div>
                                    <div className="d-flex">

                                        <img src={`https://openweathermap.org/img/wn/${result.weather[0].icon}.png`} alt="" className="icon" />
                                        <div className="description">{result.weather[0].description}</div>
                                    </div>
                                    <div className="humidity"><label className="label">Humidity:</label> {result.main.humidity}%</div>
                                    <div className="wind"><label htmlFor="" className="label">Wind speed:</label> {result.wind.speed} km/hr</div>
                                </div>
                            </>
                        ) : ("")}
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Card