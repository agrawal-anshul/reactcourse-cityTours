import React, { Component } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
//component name should be starting in capitals

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    )
  }
}
