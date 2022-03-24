import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
  //states for text
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  //Callback function to pass to useEffect
  function effectFunc() {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }
  // list to pass to useEffect
  const effectArray = [feedbackEdit]

  useEffect(effectFunc, effectArray)

  // hadles text
  const handleTextChange = (e) => {
    if (text === '') {
      setMessage(null)
      setBtnDisabled(true)
    } else if (!text == '' && text.trim().length <= 10) {
      setMessage('Text must be 10 or more char')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  //rate functions pass as prop to RatingSelect component.
  const rateFunc = (rating) => {
    setRating(rating)
  }

  //handle submit function.
  const handleSubmit = (e) => {
    //prevents the form submit to go to blank page
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      setText('')
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate this</h2>
        <RatingSelect select={rateFunc} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            type="text"
            placeholder="write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
