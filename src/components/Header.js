import classes from './Header.module.css';
import { BsPhone } from 'react-icons/bs'

function Header() {
  return (
    <div className={classes.header}>
        <div className={classes.logo}>
            <BsPhone />
            <h5>WTC</h5>
        </div>
        <ul className={classes.navLinks}>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header;