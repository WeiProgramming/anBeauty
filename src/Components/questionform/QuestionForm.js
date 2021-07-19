import React, { useState } from 'react'
import './QuestionForm.css'
import { useScreenshot } from 'use-screenshot-hook'
import { storage } from '../../firebase'

const initialForm = {
  skinType: {
    normal: false,
    oily: false,
    dry: false,
    combination: false,
  },
}
const QuestionForm = ({ questionRef }) => {
  const [formValues, setFormValues] = useState(initialForm)
  const { image, takeScreenshot } = useScreenshot(questionRef)

  const handleCheckboxChange = (e) => {
    //   console.log(e)
    setFormValues({
      ...formValues,
      skinType: {
        ...formValues.skinType,
        [e.target.name]: !formValues.skinType[e.target.name],
      },
    })
  }

  const tryTakeScreenshot = () => {
    takeScreenshot()
    let storageRef = storage.ref('testing')
    storageRef.put(image).then((snap) => {
      console.log('Uploaded a blob or file ', snap)
    })
  }

  console.log(formValues)
  return (
    <div className="questionForm">
      <form>
        <h3>Your Custom Skin Quistionnaire</h3>
        <div className="questionForm__questionContainer">
          <p>What type of skin would you say you have?</p>
          <div className="questionForm__answers">
            <label htmlFor="answer1">
              <input
                name="normal"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e)}
              ></input>{' '}
              Normal{' '}
            </label>
            <label htmlFor="answer2">
              <input
                type="checkbox"
                name="oily"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e)}
              ></input>{' '}
              Oily{' '}
            </label>
            <label htmlFor="answer3">
              <input
                type="checkbox"
                name="dry"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e)}
              ></input>{' '}
              Dry{' '}
            </label>
            <label htmlFor="answer4">
              <input
                type="checkbox"
                name="combination"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e)}
              ></input>{' '}
              Combination{' '}
            </label>
          </div>
        </div>
        <div className="questionForm__questionContainer">
          <p>What type of skin would you say you have?</p>
          <div className="questionForm__answers">
            <label htmlFor="answer1">
              <input type="checkbox"></input> Normal{' '}
            </label>
            <label htmlFor="answer2">
              <input type="checkbox"></input> Oily{' '}
            </label>
            <label htmlFor="answer3">
              <input type="checkbox"></input> Dry{' '}
            </label>
            <label htmlFor="answer4">
              <input type="checkbox"></input> Combination{' '}
            </label>
          </div>
        </div>
        <div className="questionForm__questionContainer">
          <p>What type of skin would you say you have?</p>
          <div className="questionForm__answers">
            <label htmlFor="answer1">
              <input type="checkbox"></input> Normal{' '}
            </label>
            <label htmlFor="answer2">
              <input type="checkbox"></input> Oily{' '}
            </label>
            <label htmlFor="answer3">
              <input type="checkbox"></input> Dry{' '}
            </label>
            <label htmlFor="answer4">
              <input type="checkbox"></input> Combination{' '}
            </label>
          </div>
        </div>
        <div className="questionForm__questionContainer">
          <p>What type of skin would you say you have?</p>
          <div className="questionForm__answers">
            <label htmlFor="answer1">
              <input type="checkbox"></input> Normal{' '}
            </label>
            <label htmlFor="answer2">
              <input type="checkbox"></input> Oily{' '}
            </label>
            <label htmlFor="answer3">
              <input type="checkbox"></input> Dry{' '}
            </label>
            <label htmlFor="answer4">
              <input type="checkbox"></input> Combination{' '}
            </label>
          </div>
        </div>
        <div className="questionForm__questionContainer">
          <p>What type of skin would you say you have?</p>
          <div className="questionForm__answers">
            <label htmlFor="answer1">
              <input type="checkbox"></input> Normal{' '}
            </label>
            <label htmlFor="answer2">
              <input type="checkbox"></input> Oily{' '}
            </label>
            <label htmlFor="answer3">
              <input type="checkbox"></input> Dry{' '}
            </label>
            <label htmlFor="answer4">
              <input type="checkbox"></input> Combination{' '}
            </label>
          </div>
        </div>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault()
          tryTakeScreenshot()
        }}
      >
        Submit
      </button>

      {image && <img src={image} />}
    </div>
  )
}

export default QuestionForm
