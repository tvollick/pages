import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends React.Component {
  componentDidMount () {
    // render blaze accounts form
    // then find div and place blaze form there
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount () {
    // find forms we created and destroy
    // need to clean up after ourselves.
    //Garbage collection as we are outside react now.
    Blaze.remove(this.view);
  }

  render () {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
