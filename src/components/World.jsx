import React from 'react';
import axios from 'axios';

class World extends React.Component{
    constructor(){
        super();
        this.state = {
            data : []
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({data:response.data})
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-border table-primary table-striped">
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Active Cases</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item,key)=>{
                                    return(
                                        <tr>
                                            <td><img src={item.countryInfo.flag} alt="" width="30" height="18"></img>{item.country} </td>
                                            <td>{item.cases}</td>
                                            <td>{item.active}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default World;