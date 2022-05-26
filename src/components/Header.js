import classes from './Header.module.css';
import { BsPhone } from 'react-icons/bs'
import { Link } from 'react-scroll';


function Header() {
  return (
    <div id='top' className={classes.header}>
        <div className={classes.logo}>
            <BsPhone />
            <h5>WTC</h5>
        </div>
        <ul className={classes.navLinks}>
            <Link to='about' spy={true} smooth={true} duration={500} offset={-50}><li>About</li></Link>
            <Link to='hours' spy={true} smooth={true} duration={500} offset={-50}><li>Hours</li></Link>
            <Link to='contact' spy={true} smooth={true} duration={500} offset={-50}><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Header;