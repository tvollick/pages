import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pages } from '../../../imports/collections/pages';

class PageSearch extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pages: []
    }
  }

  componentWillReceiveProps(next) {
    const { pages } = next;
    this.setState({pages});
  }

  componentWillMount() {
    const { pages } = this.props;
    this.setState({ pages }); 
  }

  handleRequestClick (page) {
    //open modal with request form?
    Meteor.call('pages.requestMembership', {
      page
    });
  }

  renderPageList () {
    return this.state.pages.map( page => {
      const { _id, title } = page;
      return (
        <li key={_id} className="list-group-item clearfix">
          <h3>{title}</h3>
          <div>Short Description</div>
          <button
            onClick={() => this.handleRequestClick(_id)}
            className="btn btn-primary pull-right"
            >
            Request Membership
          </button>
        </li>
      );
    });
  }

  render () {
    return (
      <div>
        <h1> Users can search and request membership to pages </h1>

        <div>Search will could go here?</div>

        <ul className="list-group">
          {this.renderPageList()}
        </ul>

      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('pages.search');

  return { pages: Pages.find({}).fetch() };
}, PageSearch);
