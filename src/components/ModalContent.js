import classes from './Modal.module.css';

function ModalContent(props) {
  return (
    <div className={classes.modalText}>
        <h3>Your Message has been sent!</h3>
        <div className={classes.mainText}>
            <p>Thank you for contacting us! You will receive a response within the next 42 to 48 hours. If for any reason you do not get a response in the allotted time please feel free to contact WTC directly at fstcam@outlook.com</p>
        </div>
        <div className={classes.btnAlignment}>
            <button className={classes.btn} onClick={props.hideModal}>Okay</button>
        </div>
    </div>
  )
}

export default ModalContent;