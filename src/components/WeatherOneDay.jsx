import React from "react";

import "../styles/WeatherOneDay.css"

class WeatherOneDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        if(this.props.weatherInfo){
            this.setState({
                isLoaded: true
            })
        }
    }

    render(){
        return(
            <div className="weather-info">
                <div key={this.props.weatherInfo.name} className="weather-one">
                    <h2>Weather for today</h2>
                    <div className="one">
                        <div className="city-name">{this.props.weatherInfo.name}</div>
                        <div className="temp">
                            <p className="main-temp">{ this.props.weatherInfo.main.temp }°</p>
                            <p>Feels like { this.props.weatherInfo.main.feels_like }°</p>
                        </div>

                        { this.props.weatherInfo.weather.map(item =>
                            <div className="weather-icon" key={item.id}>
                                <img className="icon"
                                     src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                                     alt={item.description}
                                />
                                <p>{ item.description }</p>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherOneDay;