import React from "react";
import axios from "axios";

import "../styles/RequsetOneDay.css"
import WeatherOneDay from "./WeatherOneDay";

class RequestOneDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            APIkey: "722926f90c9abdf1b0227c51e1ba0104",
            weatherInfo: null
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cityName !== this.props.cityName){
            this.getWeatherData()
        }
    }

    getWeatherData(){
        if(this.props.cityName){
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=metric&appid=${this.state.APIkey}`
                )
                .then(res => {
                    this.setState({
                        weatherInfo: res.data
                    })
                })
                .catch(err => console.error(err))
        }
    }

    render(){
        return !this.state.weatherInfo ? "Loading..." :(
            <>
                <WeatherOneDay weatherInfo={this.state.weatherInfo}/>
            </>
        )
    }
}

export default RequestOneDay;