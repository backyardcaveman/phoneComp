import classes from './Main.module.css'
import pic1 from '../public/pics/phone1.jpg';
import pic2 from '../public/pics/phone2.avif';
import pic3 from '../public/pics/phone3.avif';

function Main() {
  return (
    <div className={classes.main}>
        <div className={classes.pic}>
            <img src={pic1} alt='phone1'/>
        </div>
        <div className={classes.pic}>
            <img src={pic2} alt='phone2'/>
        </div>
        <div className={classes.pic}>
            <img src={pic3} alt='phone3'/>
        </div>
    </div>
  )
}

export default Main;