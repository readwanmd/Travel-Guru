import React from 'react';
import {Link} from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Home.css'

const Home = () => {
    return (
        <div className="Home-Component">
            <NavigationBar />

            <section className="home-section container">
                <div className="row">
                    <div className="col-md-5">
                        <h1>TRAVEL GURU</h1>
                        <p>Book Now, Pay when you start your journey. No Booking Fees. Get Instant Confirmation. Best Price Guarantee. Whoever you are, we’ve got the perfect place for you.</p>
                        {/* <Link to="/destination"> */}
                            <button type="button" className="btn btn-warning pl-5 pr-5">Booking &rarr;</button>
                        {/* </Link> */}
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-1"></div>

                            {
                                fakeData.map( data =>
                                    <div className={`col-md-3 place place-${data.id}`}>
                                        <Link to={`/destination/${data.place}`}>
                                            <h5 style={{textDecoration: 'none', color: 'white'}} className="text-center pt-5">{data.place}</h5>
                                        </Link>
                                    </div>
                                )
                            }

                            {/* <div className="col-md-3 place place-1">
                                <h5 className="text-center">COX'S BAZAR</h5>
                            </div>
                            <div className="col-md-3 place place-2">
                                <h5 className="text-center">SREEMANGAL</h5>
                            </div>
                            <div className="col-md-3 place place-3 ">
                                <h5 className="text-center">SUNDARBANS</h5>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;