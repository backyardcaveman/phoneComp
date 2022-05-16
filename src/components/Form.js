import classes from './Form.module.css';

function Form() {
  return (
    <div id='contact' className={classes.formSection}>
      <div className={classes.formContainer}>
      <div className={classes.information}>
        <h3>Hours of Operation</h3>
        <p>Monday: 9am to 6pm</p>
        <p>Tuesday: 9am to 6pm</p>
        <p>Wednesday: 9am to 6pm</p>
        <p>Thursday: 9am to 6pm</p>
        <p>Friday: 9am to 6pm</p>
        <p>Saturday: OFF</p>
        <p>Sunday: OFF</p>
      </div>
      <form>
        <h3>Contact Us</h3>
      <div className={classes.nameFields}>
      <div className={classes.formField}>
        <label>First Name</label>
        <input type='text'/>
      </div>
      <div className={`${classes.formField} ${classes.rightInput}`}>
        <label>Last Name</label>
        <input type='text'/>
      </div>
      </div>
      
      <div className={classes.formField}>
        <label>Phone Number</label>
        <input type='number'/>
      </div>
      <div className={classes.formField}>
        <label>Email</label>
        <input type='email'/>
      </div>
      <div className={classes.formField}>
        <label>Message</label>
        <textarea type='text'/>
      </div>
      <button className={classes.btn}>Send</button>
    </form>
    </div>
    </div>
  )
}

export default Form
