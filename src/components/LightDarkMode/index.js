// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLogged: true}

  onChange = () => {
    const {isLogged} = this.state
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state

    const theme = isLogged ? 'light-theme' : 'dark-theme'
    const text = isLogged ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="container">
        <div className={theme}>
          <h1>Click To Change Mode </h1>
          <button onClick={this.onChange}>{text}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
