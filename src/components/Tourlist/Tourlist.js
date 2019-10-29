import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import "./Tourlist.scss"
import { tourData } from '../../tourData'

export default class index extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        // console.log(id);

        const sortedTours = this.state.tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    }
    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;
        // console.log(tours);
        return (
            <section className="tourList">
                {
                    tours.map(tour => (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
                    ))
                }
            </section>

        );
    }
}
