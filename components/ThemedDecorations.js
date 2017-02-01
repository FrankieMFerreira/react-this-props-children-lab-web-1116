import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
      const childrenWithExtraProp = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div className="greeting-body">
        {childrenWithExtraProp}
      </div>
    );
  }
}


module.exports = ThemedDecorations;
