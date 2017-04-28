import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactQuill from 'react-quill';

import PageSelector from './page_selector';

import { Stories } from '../../../imports/collections/stories';
import { Pages } from '../../../imports/collections/pages';

class StoryEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      unsaved: false,
      pages: []
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  componentWillMount () {
    if (this.props.story) {
      const { title, content, pages } = this.props.story;
      this.setState({
        title,
        content,
        pages
      });
    }
  }

  componentWillReceiveProps(next){
    //es6ify
    this.setState({
      title: next.story.title,
      content: next.story.content,
      pages: next.story.pages
    });
  }

  handlePageSelects(selected) {
    // this.setState({})
    this.setState({ pages: selected });
  }

  handleSave (e) {
    e.preventDefault();
    const { title, content, pages } = this.state;
    Meteor.call('story.update', this.props.story, {
      title,
      content,
      pages
    }, this.saveCallback.bind(this));
  }

  saveCallback(error, story) {
    if (!error) {
      this.setState({unsaved: false });
    }
  }

  handleTitleChange (event) {
    this.setState({
      title: event.target.value,
      unsaved: true
    });
  }

  handleContentChange (value) {
    this.setState({
      content: value,
      // unsaved: true
    });
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

  togglePageSelector (pageId) {

    const { pages } = this.state;
    let tempPages = pages;

    if (tempPages.includes(pageId)) {
      const i = tempPages.indexOf(pageId);
      tempPages.splice(i, 1);
    } else {
      tempPages.push(pageId);
    }

    this.setState({ pages: tempPages });

  }

  render () {
    return (
      <div id="story-edit">

        <div className="row">
          <div className="col-md-8 col-md-offset-2">

            <div className="form-group">
              <label>Title</label>
              <input className="form-control" type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </div>

            <div>
              <ReactQuill
                theme="snow"
                value={this.state.content}
                onChange={this.handleContentChange}
              />
            </div>

          </div>

          <div className="col-md-2">
            <h3>Publish Area</h3>
            <button
              className="btn btn-primary"
              onClick={this.handleSave.bind(this)}
              > Save
            </button>

            <PageSelector
              pages={this.props.pages}
              checked={this.state.pages}
              passSelected={this.handlePageSelects.bind(this)}
              togglePageSelector={this.togglePageSelector.bind(this)}
            />

          </div>
        </div>


      </div>
    );
  }
}

export default createContainer ((props) => {

  const { storyId } = props.match.params;
  Meteor.subscribe('stories');
  Meteor.subscribe('pages');

  return {
    story: Stories.findOne(storyId),
    pages: Pages.find({}).fetch()
  };

}, StoryEdit);
