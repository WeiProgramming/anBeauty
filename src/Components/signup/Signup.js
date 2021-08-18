import React, { useState, useEffect } from 'react'
import './Signup.css'
import validator from 'validator'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase'
import { showSuccess, showError } from '../../features/toast/toastSlice'
import { sendEmail } from '../../Utils/email'
import { tryRegisterUser } from '../../services/auth'

const initialSignupForm = {
  email: '',
  first: '',
  last: '',
}

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [signupForm, setSignupForm] = useState({
    email: '',
    first: '',
    last: '',
  })
  // Initially setting to false to avoid initally showing it
  const [isInvalid, setIsInvalid] = useState(false)

  const onFormChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target
    setSignupForm((prev) => {
      if (name === 'newsletter') {
        value = !signupForm.newsletter
        console.log('form value ', value, name)
      }
      return {
        ...signupForm,
        [name]: value,
      }
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

  useEffect(() => {}, [
    signupForm.email,
    signupForm.first,
    signupForm.last
  ])

  const addLead = (e) => {
    e.preventDefault()
    const isFormInvalid = validateSignup(signupForm)
    if (!isFormInvalid) {
      tryRegisterUser(signupForm.email, '123456')
      // db.collection('leads')
      //   .doc(signupForm.email)
      //   .get()
      //   .then((doc) => {
      //     if (doc.exists) {
      //       setIsInvalid(true)
      //       dispatch(showError())
      //       console.log('user already registered')
      //     } else {
      //       db.collection('leads')
      //         .doc(signupForm.email)
      //         .set({
      //           signupForm,
      //         })
      //         .then(() => {
      //           console.log('successfully added in lead')
      //           //reset the input form
      //           setSignupForm(initialSignupForm)
      //           // history.push('/question')
      //           dispatch(showSuccess())
      //           sendEmail('wleung1995@hotmail.com')
      //         })
      //         .catch((err) => {
      //           alert('trouble adding lead')
      //           console.error(err)
      //           dispatch(showError())
      //         })
      //     }
      //   })
      //   .catch((error) => {
      //     dispatch(showError())
      //     dispatch(showError())
      //     console.log('Error getting document:', error)
      //   })
    } else {
      setIsInvalid(true)
      dispatch(showError())
    }
  }
  console.log('sign up form ', signupForm)
  return (
    <div className="signup">
      <h2>Be the first to get notified!</h2>
      <p>Be Part our journey for better skincare</p>
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
        {/* <div className="signup__formCheckItem">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value={signupForm.newsletter}
            onChange={onFormChange}
          />
          *Opt-in on your newsletter to receive the latest news and product
          updates
        </div> */}
        <p className={`signup__error ${isInvalid ? 'show' : ''}`}>
          <small>* There is an error with your inputs</small>
        </p>
        <button onClick={(e) => addLead(e)}>Get Started</button>
      </form>
    </div>
  )
}

export default Signup
