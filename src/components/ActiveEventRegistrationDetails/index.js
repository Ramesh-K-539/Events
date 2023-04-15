// Write your code here
import './index.css'

import {Component} from 'react'

class ActiveEventRegistrationDetails extends Component {
  NoActiveEventView = () => (
    <div className="registration-container">
      <p className="no-event-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  YetToRegisterView = () => (
    <div className="registration-container">
      <div className="register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="registration-img"
        />
        <p className="registration-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form
        </p>
        <button className="registration-button" type="button">
          Register Here
        </button>
      </div>
    </div>
  )

  RegisteredView = () => (
    <div className="registration-container">
      <div className="register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-image"
        />
        <h1 className="registered-text">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  RegistrationsClosedView = () => (
    <div className="registration-container">
      <div className="register-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
          alt="registrations closed"
          className="registration-img"
        />
        <h1 className="registered-text">Registrations Are Closed Now!</h1>
        <p className="registration-description">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    </div>
  )

  render() {
    const {status} = this.props

    switch (status) {
      case 'YET_TO_REGISTER':
        return this.YetToRegisterView()
      case 'REGISTERED':
        return this.RegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.RegistrationsClosedView()
      default:
        return this.NoActiveEventView()
    }
  }
}

export default ActiveEventRegistrationDetails
