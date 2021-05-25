import React from 'react';
import {Card} from 'react-bootstrap';
import StateData from './statedata.jsx'
import axios from 'axios'

class India extends React.Component{
    constructor(){
        super();
        this.state = {
            india : []

        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({india:response.data})
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png" alt="" />
                    <h3>India</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card border="info" style={{ width: '18rem' }}>
                                <Card.Header className="text-center">TODAY'S CASE</Card.Header>
                                <h3 className="text-center">{this.state.india.todayCases}</h3>
                                <Card.Body className="text-center">
                                    <Card.Title>[TOTAL : {this.state.india.cases}]</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card border="warning" style={{ width: '18rem' }}>
                                <Card.Header className="text-center">ACTIVE CASES</Card.Header>
                                <h3 className="text-center">{this.state.india.active}</h3>
                                <Card.Body className="text-center">
                                    <Card.Title>[TOTAL : {this.state.india.cases}]</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card border="success" style={{ width: '18rem' }}>
                                <Card.Header className="text-center">RECOVERED CASES</Card.Header>
                                <h3 className="text-center">{this.state.india.todayRecovered}</h3>
                                <Card.Body className="text-center">
                                    <Card.Title>[TOTAL : {this.state.india.recovered}]</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card border="danger" style={{ width: '18rem' }}>
                                <Card.Header className="text-center">DEATHS</Card.Header>
                                <h3 className="text-center">{this.state.india.critical}</h3>
                                <Card.Body className="text-center">
                                    <Card.Title>[TOTAL : {this.state.india.deaths}]</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>
                <div className="col-md-12">
                    <StateData/>
                </div>
            </div>
        )
    }
}

export default India;