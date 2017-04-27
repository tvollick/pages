import React from 'react';

import Header from './header';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        {props.children}
      </div>
      <footer>FOOTER</footer>

    </div>
  );
};
