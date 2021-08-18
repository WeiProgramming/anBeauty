import React, { useRef } from 'react'
import './Home.css'
import Signup from '../signup/Signup'

import {isUserAuthenticated} from '../../services/auth'

const Home = () => {
  console.log('checking if user is auth', isUserAuthenticated());
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
            Using safe and simple ingredients handpicked to specifically target and hydrate your skin!
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
