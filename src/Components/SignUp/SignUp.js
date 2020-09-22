import React, {useContext, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import NavigationBarBlk from '../NavigationBar/NavigationBarBlk';
import "./SignUp.css";

import * as firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
import firebaseConfig from '../Login/firebase.config';


const SignUp = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace("/hotel");
        })
        .catch(err => {
        console.log(err.message);
      })
    }

    const handleFacebookSignIn = () => {
        const Provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(Provider)
        .then(res => {
            const {displayName, email} = res.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace("/hotel");
        })
        .catch(err => {
        console.log(err.message);
      })
    }

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length >= 6;
        }

        if (isFieldValid){
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const newUser = {...user};
                newUser.error = '';
                newUser.success = true;
                setUser(newUser);
            })
            .catch(error => {
                const newUser = {...user};
                newUser.error = error.message;
                newUser.success = false;
                setUser(newUser);
            });
        }e.preventDefault();
    }


    return (
        <div>
            <NavigationBarBlk />
            <section className="createAccount-section mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="createAccountWihEmail">
                            <h2 className="text-center">Create an Account</h2>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <input className="form-control" onBlur={handleBlur} type="text" name="f_name" id="" placeholder="First Name" />
                                <br />
                                <input className="form-control" onBlur={handleBlur} type="text" name="l_name" id="" placeholder="Last Name" />
                                <br />
                                <input className="form-control" onBlur={handleBlur} type="email" name="email" id="" placeholder="Email" required />
                                <br />
                                <input className="form-control" onBlur={handleBlur} type="password" name="password" id="" placeholder="Password" required />
                                <small className="text-muted ml-5">Tip: Password should be at least 6 characters.</small>
                                <button type="submit" className="btn btn-warning mt-3">Create an Account</button>
                            </form>
                            <small className="ml-4" style={{color: 'red'}}>{user.error}</small>
                            {user.success && <small className="ml-2" style={{color: 'green'}}>Account created successfully. Login to Continue.</small>}
                            <p className="text-center mt-3">Already have an account? 
                            <Link className="pl-2" to="/login">
                                Login
                            </Link></p>
                        </div>
                        <br />
                        <div className="createAccountWithFbGoogle">
                            <h4>Or</h4>
                            <br />
                            <div className="xyz">
                                <div className="loginBtn" onClick={handleFacebookSignIn}>
                                    <img src="https://i.ibb.co/3Wx0kHB/fb.png" alt="" />
                                    <p className="text-middle">Continue with Facebook</p>
                                </div>
                                <br />
                                <div className="loginBtn" onClick={handleGoogleSignIn}>
                                    <img src="https://i.ibb.co/xC3RNVs/google.png" alt="" />
                                    <p className="text-middle">Continue with Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;