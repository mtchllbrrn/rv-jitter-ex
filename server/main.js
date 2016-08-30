import { Meteor } from 'meteor/meteor';
import Faker from 'faker';
import People from '../models/People.js';

Meteor.startup(() => {
  if (People.find().count() === 0) {
    console.log('Seeing database...');
    for (let i = 0; i < 100; i++) {
      People.insert({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        phone: Faker.phone.phoneNumber(),
        type: 'regular',
      });
    }
    console.log('Done.');
  }
});

Meteor.publish('people', () => People.find());
