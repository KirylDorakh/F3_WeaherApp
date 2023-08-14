import React from "react";

import "../styles/Header.css";
import RequestCurrentPosition from "./RequestCurrentPosition";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: null,
            coordsIsLoaded: false
        }

    }

    componentDidMount() {
        this.getCurrentPosition();
    }

    getCurrentPosition(){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({coords: [position.coords.latitude, position.coords.longitude],
                                     coordsIsLoaded: true
                })
            });
        } else {
            console.error("don't have geolocation")
        }
    }

    render() {
        return (
            <header>
                <h1>Weather App</h1>
                <RequestCurrentPosition coords = { this.state.coords } isLoaded={this.state.coordsIsLoaded}/>
            </header>
        )
    }
}


export default Header;