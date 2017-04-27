import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactQuill from 'react-quill';

import { Stories } from '../../../imports/collections/stories';

class StoryEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  componentWillMount () {
    if (this.props.story) {
      const { title, content } = this.props.story;
      this.setState({
        title,
        content
      });
    }
  }

  componentWillReceiveProps(next){
    this.setState({
      title: next.story.title,
      content: next.story.content
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    Meteor.call('story.update', this.props.story, {
      title: this.state.title,
      content: this.state.content
    });
  }

  handleTitleChange (event) {
    this.setState({title: event.target.value});
  }

  handleContentChange (value) {
    console.log(value);
    this.setState({content: value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div className="form-group">
            <label>Title:
            </label>
            <input className="form-control" type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <div className="form-group">

          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        <div>
          <ReactQuill
            theme="snow"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </div>

      </div>
    );
  }
}

export default createContainer ((props) => {

  const { storyId } = props.match.params;
  Meteor.subscribe('stories');

  return { story: Stories.findOne(storyId)};

}, StoryEdit);
