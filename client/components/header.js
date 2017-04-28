import React from 'react';
import { Link } from 'react-router-dom';

import Accounts from './accounts';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  //temp
  onCreatePageClick (e) {
    e.preventDefault();

    Meteor.call('pages.insert', (error, page) => {
      // browserHistory.push(`/page_edit/${page}`);
      // this.context.router.push(`/page_edit/${page}`);
    });
  }

  onCreateStoryClick (e) {
    e.preventDefault();

    Meteor.call('stories.insert');
  }

  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Pages</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav">

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/pages"> My Pages </Link>
                  </li>
                  <li><a
                    href="#"
                    onClick={this.onCreatePageClick.bind(this)}
                    >Create Page</a></li>
                  <li><a href="#">Pages I Manage</a></li>
                  <li><a href="#">Search For Pages</a></li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Stories <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/notebook">My Stories</Link></li>
                  <li><Link to="/story_edit">Write Story</Link></li>
                </ul>
              </li>
              <li><Accounts /></li>

              <li><a href="#" onClick={this.onCreateStoryClick}>Create Story</a></li>

            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Header;
