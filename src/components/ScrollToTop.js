import { useState, useEffect } from 'react'
import { AiFillUpCircle } from 'react-icons/ai';
import classes from './ScrollToTop.module.css';

function ScrollToTop() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 560) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
            
    }

  return (
    <div className={classes.topToBtm}>
        {showBtn && <AiFillUpCircle className={`${classes.iconPosition} ${classes.iconStyle}`} onClick={goToTop}/>}
        
    </div>
  )
}

export default ScrollToTop