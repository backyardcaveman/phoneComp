import { useState } from 'react'
import classes from './Form.module.css'

function Form(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [messageBox, setMessageBox] = useState('')
  const [formIsSubmitted, setFormIsSubmitted] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
  }

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value)
  }

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const messageChangeHandler = (event) => {
    setMessageBox(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (firstName && lastName && phoneNumber && email && messageBox) {
      setFirstName('')
      setLastName('')
      setPhoneNumber('')
      setEmail('')
      setMessageBox('')
      setFormIsValid(true)
    }
    setFormIsSubmitted(true)
    console.log(formIsSubmitted)
    console.log(formIsValid)
  }

  return (
    <div className={classes.formSection}>
      <div id="hours" className={classes.formContainer}>
        <div className={classes.information}>
          <h3>Hours of Operation</h3>
        <ul>
          <li>Monday: 9am to 6pm</li>
          <li>Tuesday: 9am to 6pm</li>
          <li>Wednesday: 9am to 6pm</li>
          <li>Thursday: 9am to 6pm</li>
          <li>Friday: 9am to 6pm</li>
          <li>Saturday: OFF</li>
          <li>Sunday: OFF</li>
        </ul>
        </div>
        <form id='contact' onSubmit={submitHandler}>
          <h3>Contact Us</h3>
          <div className={classes.nameFields}>
            <div className={classes.formField}>
              <label>First Name</label>
              <input
                type="text"
                onChange={firstNameChangeHandler}
                value={firstName}
              />
            </div>
            <div className={`${classes.formField} ${classes.rightInput}`}>
              <label>Last Name</label>
              <input
                type="text"
                onChange={lastNameChangeHandler}
                value={lastName}
              />
            </div>
          </div>
          <div className={classes.formField}>
            <label>Phone Number</label>
            <input
              type="number"
              onChange={phoneNumberChangeHandler}
              value={phoneNumber}
            />
          </div>
          <div className={classes.formField}>
            <label>Email</label>
            <input type="email" onChange={emailChangeHandler} value={email} />
          </div>
          <div className={classes.formField}>
            <label>Message</label>
            <textarea
              type="text"
              onChange={messageChangeHandler}
              value={messageBox}
            />
          </div>
          <button className={classes.btn} onClick={props.showModal}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
