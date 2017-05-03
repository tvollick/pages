import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import MembersRequests from './members_requests';

import { Pages } from '../../../imports/collections/pages';

class PageEditView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: " ",
      unsaved: false
    };
  }

  renderSaveStatus () {
    if (this.state.unsaved) {
      return (
        <div className="alert alert-danger">
          <strong>Ahoy!</strong> You have unsaved changes!
        </div>
      );
    }
  }

  componentWillMount () {
    if (this.props.page) {
      const { title } = this.props.page;
      this.setState({
        title
      });
    }
  }

  componentWillReceiveProps(next){
    const {title} = next.page;

    this.setState({
      title
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
      unsaved: true
    });
  }

  handleSave () {
    const { title } = this.state;

    Meteor.call('pages.update', this.props.page, {
      title
    }, this.changesSaved.bind(this));
  }

  changesSaved (error, page) {
    if (!error) {
      this.setState({unsaved: false });
    }
  }

  render () {
    return (
      <div>
        <div className="col-md-8 col-md-offset-2">
          <div className="form-group">
            <label> Page Name </label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
              className="form-control"
              placeholder="Enter Page Name"
            />

          </div>
        </div>

        <div className="col-md-2">
          <h4>Options</h4>
          <button
            onClick={this.handleSave.bind(this)}
            className="btn btn-primary"
          >
            Save Page Options
          </button>

          <MembersRequests /> 

          { this.renderSaveStatus()}
        </div>
      </div>
    )
  }
}

export default createContainer((props) => {
  const { pageId } = props.match.params;
  Meteor.subscribe('pages');

  return { page: Pages.findOne(pageId)};

}, PageEditView);
