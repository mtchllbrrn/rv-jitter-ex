import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import ListWrapper from './components/ListWrapper.jsx';

Meteor.startup(() => {
  render(
    <ListWrapper />,
    document.getElementById('render-target')
  );
});
