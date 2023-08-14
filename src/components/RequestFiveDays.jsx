import React from "react";
import axios from "axios";

import "../styles/RequestFiveDays.css"
import WeatherFiveDays from "./WeatherFiveDays";

class RequestFiveDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIkey: "722926f90c9abdf1b0227c51e1ba0104",
            weatherFiveInfo: null
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cityName !== this.props.cityName){
            this.getWeatherFiveData()
        }
    }

    getWeatherFiveData(){
        if (this.props.cityName){
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.props.cityName}&units=metric&appid=${this.state.APIkey}`)
                .then(res => {
                    let result = res.data
                    let dailyData = this.getDailyTemperature(result.list)
                    this.setState({
                        weatherFiveInfo: {...result, list: dailyData}
                    })
                })
                .catch(err => console.error(err))
        }
    }

    getDailyTemperature = (weatherList) => {
        const dailyTemperatures = []
        weatherList.forEach((data) => {
            const date = new Date(data.dt * 1000).toLocaleDateString("en-GB");
            if(!dailyTemperatures[date] || data.main.temp > dailyTemperatures[date]) {
                dailyTemperatures[date] = data
            }

        })
        return Object.values(dailyTemperatures);
    }

    render(){
        return !this.state.weatherFiveInfo ? "Loading..." :(
            <>
                <WeatherFiveDays weatherFiveInfo={ this.state.weatherFiveInfo }/>
            </>
        )
    }
}

export default RequestFiveDays;