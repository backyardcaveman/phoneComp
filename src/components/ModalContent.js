import classes from './Modal.module.css';

function ModalContent(props) {
  return (
    <div className={classes.modalText}>
        <h3>Error</h3>
        <div className={classes.mainText}>
            <p>* Please enter first name</p>
            <p>* Please enter last name</p>
            <p>* Please enter a valid phone number</p>
            <p>* Please enter a valid email</p>
            <p>* Make sure to include a message</p>
        </div>
        <div className={classes.btnAlignment}>
            <button className={classes.btn} onClick={props.hideModal}>Okay</button>
        </div>
    </div>
  )
}

export default ModalContent;