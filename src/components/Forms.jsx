import React from "react";
import { Button, Form } from "react-bootstrap";

import "../styles/Forms.css"
import RequestOneDay from "./RequestOneDay";
import RequestFiveDays from "./RequestFiveDays";

class Forms extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cities: ["Abu Dhabi", "London", "Minsk"],
            city: "",
            cityName: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleTextFormChange = this.handleTextFormChange.bind(this)
    }

    handleSelectChange = (event) => {
        this.setState(
            {
                cities: ["Abu Dhabi", "London", "Minsk"],
                city: event.target.value,
                cityName: ""
            }
        )
    };

    handleTextFormChange = (event) => {
        this.setState(
            {
                cities: ["Abu Dhabi", "London", "Minsk"],
                city: event.target.value,
                cityName: ""
            }
        )
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                cities: ["Abu Dhabi", "London", "Minsk"],
                city: event.target.value,
                cityName: this.state.city
            }
        )
    };

    render() {
        return(
            <div className="forms">
                <h2>Choose the City</h2>
                <div>
                    <Form className="text-form" onSubmit={this.handleSubmit}>
                        <Form.Select value={this.state.city} onChange={this.handleSelectChange} aria-label="Choose city">
                            <option>City</option>
                            {this.state.cities.map(city => <option key={ city } value={ city }>{ city }</option>)}
                        </Form.Select>
                        <Form.Group controlId="cityForm">
                            <Form.Label>or write:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city name"
                                value={this.state.city}
                                onChange={this.handleTextFormChange}
                            />
                        </Form.Group>
                        <Button type="submit" variant="info">Check</Button>
                    </Form>
                </div>

                <RequestOneDay cityName={this.state.cityName} />
                <RequestFiveDays cityName={this.state.cityName}/>
            </div>
        )
    }
}

export default Forms;