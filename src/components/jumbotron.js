import React, { Fragment } from 'react'

const Jumbotron = (props) => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 custom-font">{props.jumbotronTitle}</h1>
          <p className="lead" style={{color: '#f9f9f9'}}>{props.jumbotronContent}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Jumbotron
