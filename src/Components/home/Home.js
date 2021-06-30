import React, { useRef } from 'react'
import './Home.css'
import QuestionForm from '../questionform/QuestionForm'
import Signup from '../signup/Signup'

const Home = () => {
  const homeFormRef = useRef(null)
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
          <Signup formRef={homeFormRef}></Signup>
        </div>
      </div>
      <div className="home__form" ref={homeFormRef}>
        <h2>Let's get started</h2>
        <QuestionForm></QuestionForm>
      </div>
    </div>
  )
}

export default Home
