import React, {useContext, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import NavigationBarBlk from '../NavigationBar/NavigationBarBlk';
import "../SignUp/SignUp.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const {from} = location.state || {from: {pathname: "/"}};

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
            history.replace(from);
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
            history.replace(from);
        })
        .catch(err => {
        console.log(err.message);
      })
    }

    const [user, setUser] = useState({
        email: '',
        password: '',
        error: ''
    })

    const handleBlur = (e) => {
        let isFieldValid = true;

        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            isFieldValid = e.target.value.length >= 6;
        }

        if (isFieldValid) {
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const {email} = res.user;
                    const signedInUser = {email}
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                })
                .catch(error => {
                    const newUser = {...user};
                    newUser.error = error.message;
                    setUser(newUser);
                });
        } e.preventDefault();
    }


    return (
        <div>
            <NavigationBarBlk />
            <section className="createAccount-section mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="createAccountWihEmail">
                            <h2 className="text-center">Login</h2>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <input className="form-control" onBlur={handleBlur} type="email" name="email" id="" placeholder="Email" required />
                                <br />
                                <input className="form-control" onBlur={handleBlur} type="password" name="password" id="" placeholder="Password" required />
                                <br />
                                <button type="submit" className="btn btn-warning">Login</button>
                            </form>
                            <small className="ml-1" style={{color: 'red'}}>{user.error}</small>
                            <p className="text-center mt-3">Don't have an account?
                                <Link className="pl-2"to="/signup">
                                    Create an account
                                </Link>
                            </p>
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

export default Login;