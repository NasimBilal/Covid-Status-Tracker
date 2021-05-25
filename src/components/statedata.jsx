import React from 'react';
import axios from 'axios'
import {Accordion, Card, Button } from 'react-bootstrap'

class StateData extends React.Component{
    constructor(){
        super();
        this.state = {
            stateData :""
        }
    }
    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
        this.setState({stateData:response.data})
        })
    }
    render(){
        let keys = Object.keys(this.state.stateData)
        return(
            <div className="row">
                <div className="col-md-12">
                    <Accordion>
                        {
                            keys.map((item,key)=>{
                                let districts = this.state.stateData[item].districtData;
                                let districtkeys = Object.keys(districts);
                                let total_active = 0;
                                let total_confirmed = 0;
                                let total_recovered = 0;
                                let total_deaths = 0;

                                let district_list = []
                                for(let x in districts){
                                    total_active += districts[x].active
                                    total_confirmed +=districts[x].confirmed
                                    total_recovered += districts[x].recovered
                                    total_deaths += districts[x].deceased
                                    let ob = districts[x]
                                    ob["district_name"] = x;
                                    district_list.push(ob)
                                }
                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                                                {item} <span className="btn-dark mr-2 p-1">Total Cases - {total_confirmed}</span> <span className="btn-warning mr-2 p-1">Active Cases - {total_active}</span> <span className="btn-danger mr-2 p-1">Deaths - {total_deaths}</span><span className="btn-success mr-2 p-1">Recovered {total_recovered}</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>Confirmed</td>
                                                            <td>Active</td>
                                                            <td>Recovered</td>
                                                            <td>Deaths</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            district_list.map((item,key)=>{
                                                                return(
                                                                    <tr>
                                                                        <td>{item.district_name}</td>
                                                                        <td>{item.confirmed}</td>
                                                                        <td>{item.active}</td>
                                                                        <td>{item.recovered}</td>
                                                                        <td>{item.deceased}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                 </table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
        )
    }
}

export default StateData;