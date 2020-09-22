import React from 'react';
import "./Booking.css";
import NavigationBar from '../NavigationBar/NavigationBar';
import {Link, useParams} from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';

const Booking = () => {
    const {place} = useParams();
    return (
        <div className="booking-component">
            <NavigationBar />
            <div className="Booking-section container">
                <div className="row">
                    <div className="col-md-6 mt-5 pt-5">
                        <h1>{place}</h1>
                        {
                            fakeData.filter( pl => pl.place === place).map( filtered => (
                                <p key={filtered.id}>{filtered.description}</p>
                        ))}
                    </div>
                    <div className="col-md-6 bookingForm">
                        <div className="formWidth">
                            <form action="" >
                                <h6>Origin</h6>
                                <input className="form-control" type="text" placeholder="From" />
                                <br />
                                <h6>Destination</h6>
                                <input className="form-control" type="text" placeholder="To" value={place} />
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <h6>From</h6>
                                        <input type="date" className="form-control" required />
                                    </div>
                                    <div className="col">
                                        <h6>To</h6>
                                        <input type="date" className="form-control" required />
                                    </div>
                                </div>
                                <br />
                                <Link to="/hotel">
                                    <button className="btn btn-warning">Start Booking</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;