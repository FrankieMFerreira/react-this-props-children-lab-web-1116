import React from 'react'

class Invitation extends React.Component {
  render() {
    return (
      <div className=" ">
        <h1>You've been invited!</h1>
        <div className="greeting-body">{this.props.children}</div>
      </div>
    );
  }
}


module.exports = Invitation;
