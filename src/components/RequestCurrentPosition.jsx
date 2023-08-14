import React from "react";
import axios from "axios";
import CurrentPositionWeather from "./CurrentPositionWeather";

class RequestCurrentPosition extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            APIkey: "722926f90c9abdf1b0227c51e1ba0104",
            currentPositionWeather: null,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.coords !== this.props.coords){
            this.setCurrentPositionWeather()
        }
    }

    setCurrentPositionWeather(){
        if (this.props.coords) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords[0]}&lon=${this.props.coords[1]}&units=metric&appid=${this.state.APIkey}`
                )
                .then(res => {
                    this.setState({
                        APIkey: "722926f90c9abdf1b0227c51e1ba0104",
                        currentPositionWeather: res.data,
                    })
                })
                .catch(err => console.error(err))
        }
    }

    render() {
        return !this.state.currentPositionWeather ? "Loading..." : (
            <CurrentPositionWeather currentPositionWeather={this.state.currentPositionWeather}/>
        )
    }
}

export default RequestCurrentPosition;