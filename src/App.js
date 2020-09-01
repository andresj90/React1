import React, { useState, useEffect, Component } from 'react';
import './App.css';
import EnrtyPoint from './components/EntryPoint';
import {
   BrowserRouter as Router,
} from 'react-router-dom';
import store from './redux/store'; 
import {Provider} from 'react-redux'; 

class App extends Component {
   render() {
      return (
         <Provider store ={store}>
         <Router>
            <EnrtyPoint />
         </Router>
         </Provider>
      )
   }
}

export default App;
