import React from 'react';

class MembersRequests extends React.Component {

  componentWillReceiveProps(next) {
    console.log(next); 
  }

  render () {
    return (
      <div>
        Members Request
      </div>
    );
  }
}

export default MembersRequests;
