import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/AboutPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutLink from './components/AboutLink'
import { FeedBackProvider } from './context/FeedbackContext'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const myApp = (
    <FeedBackProvider>
      <div>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </div>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <AboutLink />
        </Router>
      </div>
    </FeedBackProvider>
  )
  return myApp
}

export default App
