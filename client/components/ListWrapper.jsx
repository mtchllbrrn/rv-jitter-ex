import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import List from './List';
import People from '../../models/People.js';

export default createContainer(() => {
  const sub = Meteor.subscribe('people');
  const loading = !sub.ready();
  const data = People.find().fetch();
  return {
    loading,
    data,
  };
}, List);
