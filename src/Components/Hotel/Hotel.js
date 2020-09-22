import React from 'react';
import NavigationBarBlk from '../NavigationBar/NavigationBarBlk';
import "./Hotel.css";

const Hotel = () => {
    return (
        <div className="hotel-component">
            <NavigationBarBlk />
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Stay in Cox's Bazar</h4>
                        <div className="hotel-section">
                            <div>
                                <img className="hotel-image" src="https://i.ibb.co/DRzqDQ9/hotel-1.png" alt="" />
                            </div>
                            <div className="ml-2">
                                <p><strong>Light bright airy stylish apt & safe peaceful stay</strong></p>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable</p>
                                <div className="ratingsAndPrice">
                                    <img className="retings-icon" src="https://i.ibb.co/QmbbNVS/Star.png" alt="" />
                                    <p className="mr-auto ml-3">4.9(20)</p>
                                    <p><strong>$34/</strong>Night</p>
                                </div>
                            </div>
                        </div>

                        <div className=" hotel-section">
                            <div>
                                <img className="hotel-image" src="https://i.ibb.co/FDyLHC1/hotel-2.png" alt="" />
                            </div>
                            <div className="ml-2">
                                <p><strong>Light bright airy stylish apt & safe peaceful stay</strong></p>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable</p>
                                <div className="ratingsAndPrice">
                                    <img className="retings-icon" src="https://i.ibb.co/QmbbNVS/Star.png" alt="" />
                                    <p className="mr-auto ml-3">4.9(20)</p>
                                    <p><strong>$34/</strong>Night</p>
                                </div>
                            </div>
                        </div>

                        <div className=" hotel-section">
                            <div>
                                <img className="hotel-image" src="https://i.ibb.co/7JVmM37/hotel-3.png" alt="" />
                            </div>
                            <div className="ml-2">
                                <p><strong>Light bright airy stylish apt & safe peaceful stay</strong></p>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable</p>
                                <div className="ratingsAndPrice">
                                    <img className="retings-icon" src="https://i.ibb.co/QmbbNVS/Star.png" alt="" />
                                    <p className="mr-auto ml-3">4.9(20)</p>
                                    <p><strong>$34/</strong>Night</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-6 map">
                        <img src="https://i.ibb.co/DRpsZLs/map.jpg" alt="" />
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default Hotel;