import React from 'react'

function Form() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type='text'/>
      </div>
      <div>
        <label>Phone Number</label>
        <input type='number'/>
      </div>
      <div>
        <label>Email</label>
        <input type='email'/>
      </div>
      <div>
        <label>Message</label>
        <textarea type='text'/>
      </div>
    </form>
  )
}

export default Form
