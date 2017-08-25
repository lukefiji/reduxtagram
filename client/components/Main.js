import React from 'react';
import { Link } from 'react-router';

// cloneElement(element, [props], [...children]) returns a new
// React element using a specified element as the starting point
const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
});

export default Main;
