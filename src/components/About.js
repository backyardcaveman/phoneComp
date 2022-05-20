import classes from './About.module.css'

function About() {
  return (
    <div id='about' className={classes.about}>
      <h3>About WTC</h3>
      <h5>DON'T KNOW WHAT THE CELL IS WRONG WITH YOUR PHONE?</h5>
      <h5>CALL ME CRAZY BUT WE MAY HAVE A SOLUTION FOR YOU!</h5>
      <div className={classes.paragraph}>
      <p>
        As a small business in Southern Ontario we deal with simple hardware related repairs of iphones and Samsung phones including: front/back screen repairs, camera replacements, charging port replacements etc. Don't know if we can help?
        Message us anyways! We'll happily let you know if we can assist you.
     </p>
        
      </div>
      
    </div>
  )
}

export default About
