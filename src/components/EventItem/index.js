// Write your code here

import './index.css'

const EventItem = props => {
  const {eventItemDetails, onClickEvent, activeEventId} = props
  const {id, registrationStatus, location, name, imageUrl} = eventItemDetails

  const onClickButton = () => {
    onClickEvent(id, registrationStatus)
  }

  const activeClassName = activeEventId === id ? 'active-btn' : ''

  return (
    <li className="list-item" key={id}>
      <button
        className={`custom-button ${activeClassName}`}
        type="button"
        onClick={onClickButton}
      >
        <img className="event-image" alt="event" src={imageUrl} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
