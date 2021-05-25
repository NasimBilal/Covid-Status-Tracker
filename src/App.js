import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import World from './components/World';
import India from './components/India';

class App extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <div className="fluid=container">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/" component={India} />
            <Route path="/India"  component={India}  />
            <Route path="/World" component={World} />
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App;
