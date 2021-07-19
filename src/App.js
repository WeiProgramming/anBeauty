import './App.css'
import Home from './Components/home/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import QuestionForm from './Components/questionform/QuestionForm'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/question">
            <QuestionForm />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
