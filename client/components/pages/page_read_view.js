import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import  StoryList from '../stories/story_list';
import { Pages } from '../../../imports/collections/pages';

class PageReadView extends React.Component {

  renderTitle () {
    if (this.props.page) {
      return (
        this.props.page.title
      );
    }
  }

  render () {
    return (
      <div>
        <h1>{this.renderTitle()}</h1>
        <StoryList page={this.props.page} pageId={this.props.match.params.pageId} />
      </div>
    );
  }

}

export default createContainer((props) => {
  const { pageId } = props.match.params;
  Meteor.subscribe('pages');

  return { page: Pages.findOne(pageId) };
}, PageReadView);
