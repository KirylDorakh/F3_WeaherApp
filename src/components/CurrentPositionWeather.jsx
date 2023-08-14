import React from "react";

import "../styles/CurrentPositionWeather.css"

class CurrentPositionWeather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount(){
        if (this.props.currentPositionWeather) {
            this.setState({isLoaded: true})
        }
    }

    render(){
        return !this.state.isLoaded ? "Loading...": (
            <>
                { this.props.currentPositionWeather ?
                    <div className="current-position">
                        <div className="current-position-name">{ this.props.currentPositionWeather.name }</div>
                        <div className="current-position-info">{ this.props.currentPositionWeather.main.temp }°</div>
                        { this.props.currentPositionWeather.weather.map(item =>
                            <div key={ item.id } className="current-position-icon">
                                <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt={item.description}/>
                            </div>
                        )}
                    </div>
                    : <p></p>
                }
            </>
        )
    }
}

export default CurrentPositionWeather