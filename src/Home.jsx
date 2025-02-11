import React from 'react';
import './Home.css';
import BGimage from './Images/Netflix-BG.jpg';
import Netflix from './Images/Netflix_Logo_PMS.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
        <div><img className="bgimage" src={BGimage} alt="BGimage" /></div>
        <div className="transparent"></div>
        <div className="header">
            <img className="netfliximg" src ={Netflix} alt="Netflix" />
            <div className='signinouter'><Link to="/movies"  className="signin">Sign In</Link> </div>
        </div>
        <div className='home'>
            <span className='unlimited'>Unlimited movies, TV shows and more</span>
            <span className='start'>Starts at ₹149. Cancel at any time.</span>
            <span className='membership'>Ready to watch? Enter your email to create or restart your membership</span>
            <div className='mail'><input className='email' placeholder='   Email address' />
            <span className='getstarted'>Get Started! </span></div>
        </div>
    </div>
  )
}

export default Home