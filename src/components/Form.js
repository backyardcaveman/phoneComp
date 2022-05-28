import { useState } from 'react'
import emailjs from 'emailjs-com';
import classes from './Form.module.css'

function Form(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [messageBox, setMessageBox] = useState('')
  const [formIsSubmitted, setFormIsSubmitted] = useState(false)
  const [firstNameIsValid, setFirstNameIsValid] = useState(false)
  const [lastNameIsValid, setLastNameIsValid] = useState(false)
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false)
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [messageBoxIsValid, setMessageBoxIsValid] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
    if(firstName.length >= 3) {
      setFirstNameIsValid(true);
    } else {
      setFirstNameIsValid(false);
    }
  }

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value)
    if(lastName.length >= 3) {
      setLastNameIsValid(true);
    } else {
      setLastNameIsValid(false);
    }
  }

  const phoneNumberChangeHandler = (event) => {
    setPhoneNumber(event.target.value)
    if(phoneNumber.length === 9) {
      setPhoneNumberIsValid(true);
    } else {
      setPhoneNumberIsValid(false);
    }
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
    if(email.includes('@')) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  }

  const messageChangeHandler = (event) => {
    setMessageBox(event.target.value)
    if(messageBox.length >= 3) {
      setMessageBoxIsValid(true);
    } else {
      setMessageBoxIsValid(false);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()

    setFormIsSubmitted(true)
    if (firstNameIsValid && lastNameIsValid && phoneNumberIsValid && emailIsValid && messageBoxIsValid) {

      emailjs.sendForm('service_7oxtmrr', 'template_u6h2bik', event.target, 'RxBFx2WAFVLuboamj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setFirstName('')
      setLastName('')
      setPhoneNumber('')
      setEmail('')
      setMessageBox('')
      props.setShowModal(true)
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    } 
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
                name='to_name'
              />
              {!firstNameIsValid && formIsSubmitted && <p>*Enter a valid first name</p>}
            </div>
            <div className={`${classes.formField} ${classes.rightInput}`}>
              <label>Last Name</label>
              <input
                type="text"
                onChange={lastNameChangeHandler}
                value={lastName}
              />
              {!lastNameIsValid && formIsSubmitted && <p>*Enter a valid last name</p>}
            </div>
          </div>
          <div className={classes.formField}>
            <label>Phone Number</label>
            <input
              type="number"
              onChange={phoneNumberChangeHandler}
              value={phoneNumber}
            />
            {!phoneNumberIsValid && formIsSubmitted && <p>*Enter a valid phone number</p>}
          </div>
          <div className={classes.formField}>
            <label>Email</label>
            <input type="email" onChange={emailChangeHandler} value={email} name='from_name'/>
            {!emailIsValid && formIsSubmitted && <p>*Enter a valid email</p>}
          </div>
          <div className={classes.formField}>
            <label>Message</label>
            <textarea
              type="text"
              onChange={messageChangeHandler}
              value={messageBox}
              name='message'
            />
            {!messageBoxIsValid && formIsSubmitted && <p>*Don't leave message box section blank</p>}
          </div>
          {formIsSubmitted && formIsValid && <p className={classes.confirmationText}>*Your message has been sent!*</p>}
          {formIsSubmitted && !formIsValid && <button className={classes.btn}>
            Send
          </button>}
          {!formIsSubmitted && !formIsValid && <button className={classes.btn}>
            Send
          </button>}
        </form>
      </div>
    </div>
  )
}

export default Form
