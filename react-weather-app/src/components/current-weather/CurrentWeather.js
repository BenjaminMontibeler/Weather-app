import './CurrentWeather.css'

const CurrentWeather = ({ data }) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parametar-row'>
                        <span className='parametar-label'>Details</span>
                    </div>
                    <div className='parametar-row'>
                        <span className='parametar-label'>Feels like</span>
                        <span className='parametar-value'>{Math.round(data.main.feels_like)} °C</span>
                    </div>
                    <div className='parametar-row'>
                        <span className='parametar-label'>Wind</span>
                        <span className='parametar-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parametar-row'>
                        <span className='parametar-label'>Humidity</span>
                        <span className='parametar-value'>{data.main.humidity} %</span>
                    </div>
                    <div className='parametar-row'>
                        <span className='parametar-label'>Pressure</span>
                        <span className='parametar-value'>{data.main.pressure} Pa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;