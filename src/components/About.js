import classes from './About.module.css'

function About() {
  return (
    <div className={classes.about}>
      <h3>About WTC</h3>
      <h5>DON'T KNOW WHAT THE CELL IS WRONG WITH YOUR PHONE?</h5>
      <h5>CALL ME CRAZY BUT WE MAY HAVE A SOLUTION FOR YOU!</h5>
      <div className={classes.paragraph}>
      <p>
        this is dummy text, this is dummy text, this is dummy text, this is
        dummy text
      </p>
      <p>
        this is dummy text, this is dummy text, this is dummy text, this is
        dummy text
      </p>
      <p>
        this is dummy text, this is dummy text, this is dummy text, this is
        dummy text
      </p>
      </div>
      
    </div>
  )
}

export default About
