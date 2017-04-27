import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import  StoryList from '../stories/story_list';
import { Pages } from '../../../imports/collections/pages';

class PageReadView extends React.Component {

  render () {
    return (
      <div>
        <StoryList page={this.props.page} />
      </div>
    );
  }

}

export default createContainer((props) => {
  const { pageId } = props.match.params;
  Meteor.subscribe('pages');

  return { page: Pages.findOne(pageId) };
}, PageReadView);
