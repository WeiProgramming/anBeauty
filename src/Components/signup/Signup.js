import React, { useState, useEffect } from 'react'
import './Signup.css'
import validator from 'validator'
import { useHistory } from 'react-router'

import { db } from '../../firebase'

const Signup = () => {
  const history = useHistory();
  const [signupForm, setSignupForm] = useState({
    email: '',
    first: '',
    last: '',
  })
  // Initially setting to false to avoid initally showing it
  const [isInvalid, setIsInvalid] = useState(false)

  const onFormChange = (e) => {
    const { name, value } = e.target
    setSignupForm({
      ...signupForm,
      [name]: value,
    })
  }

  const validateSignup = (formObj) => {
    let isValidEmail = validator.isEmail(formObj['email'])
    if (!formObj.email || !isValidEmail || !formObj.first || !formObj.last) {
      // Not validated
      setIsInvalid(true)
      return true
    } else {
      setIsInvalid(false)
      // Validated
      return false
    }
  }

  useEffect(() => {}, [signupForm.email, signupForm.first, signupForm.last])

  const addLead = (e) => {
    e.preventDefault()
    const isFormInvalid = validateSignup(signupForm)
    if (!isFormInvalid) {
      db.collection('leads')
        .doc(signupForm.email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setIsInvalid(true)
            console.log('user already registered')
          } else {
            db.collection('leads')
              .doc(signupForm.email)
              .set({
                signupForm,
              })
              .then(() => {
                console.log('successfully added in lead')
                //reset the input form
                setSignupForm({
                  email: '',
                  first: '',
                  last: '',
                })
                history.push('/question')
              })
              .catch((err) => {
                alert('trouble adding lead')
                console.error(err)
              })
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
    } else {
      setIsInvalid(true)
    }
  }
  console.log('sign up form ', signupForm)
  return (
    <div className="signup">
      <h2>Sign Up and Get Started, It's Free</h2>
      <p>Join for an exclusive evaluation on your skin</p>
      <form>
        <div className="signup__formItem">
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => onFormChange(e)}
            value={signupForm.email}
          />
        </div>
        <div className="signup__formItem">
          <input
            placeholder="First Name"
            type="text"
            name="first"
            onChange={(e) => onFormChange(e)}
            value={signupForm.first}
          />
        </div>
        <div className="signup__formItem">
          <input
            placeholder="Last Name"
            type="text"
            name="last"
            onChange={(e) => onFormChange(e)}
            value={signupForm.last}
          />
        </div>
        <p className={`signup__error ${isInvalid ? 'show' : ''}`}>
          <small>* There is an error with your inputs</small>
        </p>
        <button onClick={(e) => addLead(e)}>Get Started</button>
      </form>
    </div>
  )
}

export default Signup
