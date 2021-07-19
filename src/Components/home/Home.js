import React, { useRef } from 'react'
import './Home.css'
import Signup from '../signup/Signup'

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__left">
          <h1>
            Pan <br />
            <span>Beauty</span>
          </h1>
          <h2>Find The Perfect Match For Your Skin</h2>
          <p>
            We will find the best product and items available out there so you
            don't have to
          </p>
        </div>
        <div className="home__right">
          <Signup></Signup>
        </div>
      </div>
    </div>
  )
}

export default Home
