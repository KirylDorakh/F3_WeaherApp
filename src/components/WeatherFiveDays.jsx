import React from "react";

import "../styles/RequestFiveDays.css"

class WeatherFiveDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {
        if(this.props.weatherFiveInfo){
            this.setState({
                isLoaded: true
            })
        }
    }

    convertData = ( timestamp ) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        })
    }

    render(){
        return (
            <div className="weather-five">
                <h2>Weather for the next 5 days </h2>
                <div className="five">
                    {this.props.weatherFiveInfo && this.props.weatherFiveInfo.list.map(day =>
                        <div className="day" key={day.dt}>
                            <p> { this.convertData(day.dt) } </p>
                            <p className="temp">{day.main.temp}°</p>
                            { day.weather.map(item =>
                                <div key={item.id}>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${item.icon}.png`}
                                        alt={item.description}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        )
    }
}

export default WeatherFiveDays;