import React from 'react';
import NavigationBarBlk from '../NavigationBar/NavigationBarBlk';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <NavigationBarBlk />
            
            <div className="contact">
                <h1>For any query contact us</h1>
                <h4>Email: contact@travelguru.com</h4>
                <h4>Phone: +880 1700 000000</h4>
            </div>
        </div>
    );
};

export default ContactUs;