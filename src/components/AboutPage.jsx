import Card from './shared/Card'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>this is an about</h1>
        <Link to="/">Back Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage
