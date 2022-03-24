import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackList = () => {
  // this function is for list all the feedbacks in FeedbackContext
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>
  }

  const feedbacks = feedback.map((item) => (
    <FeedbackItem key={item.id} item={item} />
  ))
  return <div className="feedback-list">{feedbacks}</div>
}

export default FeedbackList
