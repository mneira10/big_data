import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Taller1 from './components/taller1/Taller1';
import Taller2 from './components/taller2/Taller2';
import Taller3 from './components/taller3/Taller3';

//color palette 
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#448ef6',
    accent1Color: '#f16821',
  },
});

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1 >Big Data</h1>
        <h2 >Grupo 7</h2>
        
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs>
            <Tab label="Taller 1" >
              <div class="taller">
                <Taller1/>
              </div>
            </Tab>
            <Tab label="Taller 2" >
              <div class="taller">
                <Taller2/>
              </div>
            </Tab>
            <Tab label="Taller 3">
              <div class="taller">
                <Taller3/>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
