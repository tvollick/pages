import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './components/app';
import Home from './components/home';
import PagesMain from './components/pages/pages_main';
import PageReadView from './components/pages/page_read_view';
import PageEditView from './components/pages/page_edit_view';

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />

      <Route path="/pages" component={PagesMain} />
      <Route path="/page/:pageId" component={PageReadView} />
      <Route path="/page_edit/:pageId" component={PageEditView} />

    </App>
  </Router>
);

Meteor.startup(()=>{
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
