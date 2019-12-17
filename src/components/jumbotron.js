import React, { Fragment } from 'react'

const Jumbotron = (props) => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">{props.jumbotronTitle}</h1>
          <p className="lead">{props.jumbotronContent}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Jumbotron
