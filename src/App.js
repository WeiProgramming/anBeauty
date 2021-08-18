import './App.css'
import { useEffect, useState } from 'react'
import Home from './Components/home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import QuestionForm from './Components/questionform/QuestionForm'
import Footer from './Components/footer/footer'
import Alert from '@material-ui/core/Alert'
import AlertTitle from '@material-ui/core/AlertTitle'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectToast,
  hideSuccess,
  hideError,
} from './features/toast/toastSlice'
import {
  isUserAuthenticated,
  tryLoginUser,
  tryLogoutUser,
} from './services/auth'

import { isAuthenticated } from './features/auth/authSlice'

import Navigation from './Components/navigation/navigation'

function App() {
  const dispatch = useDispatch()
  let isHiddenToast = useSelector(selectToast)
  // let [toastHidden, setToastHidden] = useState(true)
  useEffect(() => {
    if (isUserAuthenticated()) {
      console.log('is signed in')
      dispatch(isAuthenticated(true))
    } else {
      console.log('not signed in')
      dispatch(isAuthenticated(false))
    }
    clearTimeout()
    setTimeout(() => {
      if (isHiddenToast.isSuccessHidden === false) {
        dispatch(hideSuccess())
      }
      if (isHiddenToast.isSErrorHidden === false) {
        dispatch(hideError())
      }
    }, 10000)
    clearTimeout()

    console.log('toastisHidden', isHiddenToast)
  }, [isHiddenToast])
  console.log('ishiddentoast ', isHiddenToast)
  return (
    <Router>
      <div className="app">
        <div className="app__overlay"></div>
        <Alert
          severity="success"
          className={`app__alert ${
            isHiddenToast.isSuccessHidden ? '' : 'showAlert'
          }`}
        >
          <AlertTitle>Sign Up Successfully!</AlertTitle>
          Stay Tuned For Upcoming Products and Info! —{' '}
          <strong>Panwei Team</strong>
        </Alert>
        <Alert
          severity="error"
          className={`app__alert ${
            isHiddenToast.isSErrorHidden ? '' : 'showAlert'
          }`}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/question">
            <QuestionForm />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
