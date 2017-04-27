import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Pages } from '../../../imports/collections/pages';

class PagesList extends React.Component {

  // this really shouldn't be here...
  onPageRemove (page) {
    console.log('here');
    Meteor.call('pages.remove', page);
  }

  renderList () {
    return this.props.pages.map(page => {
      return (
        <li className="list-group-item clearfix" key={page._id}>
          Page Group {page._id}

          <button
            className="btn btn-danger pull-right"
            onClick={() => this.onPageRemove(page)}
          >
            Remove Page
          </button>

          <Link
            to={`/page/${page._id}`}
            className="btn btn-default pull-right"
          >
            View Page
          </Link>

        </li>

      )
    });
  }

  render () {
    return (
      <ul className="list-group">
        { this.renderList() }
      </ul>
    );
  }
}

export default createContainer (() => {
  Meteor.subscribe('pages');

  return { pages: Pages.find({}).fetch() }
}, PagesList);