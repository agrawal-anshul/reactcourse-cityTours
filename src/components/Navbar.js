import React, { Component } from 'react'
import logo from '../logo.svg'
import './Navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <img style={{ width: '70px' }} src={logo} alt="" />
                <ul className="nav-links">
                    <li>
                        <a href="/" className="nav-link">home
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">about
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link">tours
                        </a>
                    </li>
                </ul>

            </nav>
        )
    }
}
