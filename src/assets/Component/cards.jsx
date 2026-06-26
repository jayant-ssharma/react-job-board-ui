import React from 'react'
import "./cards.css";

const cards = (props) => {
  return (
    <div className="body">
      <div className='Header'>
        <div className="logo">
          <img src= {props.logo} alt="" />
        </div>
        <div className="save">
          <span class="material-symbols-outlined">
            bookmark
          </span>
        </div>
      </div>
      <div className='main'>
        <div className="companyName">
          <h3>
            {props.company}
          </h3>
        </div>
        <div className="datePosted">
          <p>
           { props.datePosted}
          </p>
        </div>


      </div>
      <div className="role">
        <h2>
          {props.role}
        </h2>
      </div>
      <div className="tags">
        <div className="tag1">
          <h4>
            {props.tag}
          </h4>
        </div>
        <div className="tag2">
          <h4>
            {props.tag2}
          </h4>
        </div>
      </div>
<hr />
      <div className="footer">
        <div className='Pay-Place'>
          <div className="pay">
            <h3>{props.pay}</h3>
          </div>
          <div className="place">
            <p>{props.place}</p>
          </div>
        </div>
        <div className="apply">
          <button>
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}

export default cards