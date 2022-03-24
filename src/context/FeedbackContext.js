import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()
//feedbacks state.
export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This feedback1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This feedback2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This feedback3',
      rating: 7,
    },
  ])

  //edit feedbacks state/
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })
  //function to delete the feedback from the state.
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // function to add a feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // set the item to be updated.
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  //update the feedback item.
  const updateFeedback = (id, updItem) => {
    const newFb = feedback.map((item) =>
      item.id === id ? { ...item, ...updItem } : item
    )
    setFeedback(newFb)
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
