import React, { Component } from 'react';
import './App.css';
import { Login, Home }from './Components'
import { firebaseAuth } from './constants'


class App extends Component {
  state = {
    authed:false
  }
  constructor(){
    super();
    let app = this;
    firebaseAuth().onAuthStateChanged((user) => {
      if(user){
        app.setState({
          authed: true
        })
      }else{
        app.setState({
          authed: false
        })
      }
    });
  }

  render() {
    return (
      this.state.authed ? <Home /> : <Login />
    );
  }
}

export default App;
