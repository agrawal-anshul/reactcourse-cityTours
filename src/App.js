import React, { Component } from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Tourlist from "./components/Tourlist/Tourlist"
//component name should be starting in capitals

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
      </React.Fragment>
    )
  }
}
