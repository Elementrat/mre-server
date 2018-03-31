import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import Mysteries from './mysteries'

const Events = new Mongo.Collection('events');

// Name - what is the mystery called
// minPlayers - how many required chars
// maxPlayers - how many optional chars
// summary - brief overview of setting, plot
// characters - array of character objects
// items - array of item objects

Meteor.methods({
  'Events.insertOne': ({ mysteryName, hostName, startDateTime, hostCharacterID, currentPhase, phases }) => {
    console.log('Adding event with name', mysteryName, 'hosted by', hostName);

    const requestedMystery = Mysteries.findOne({ name: mysteryName });
    console.log('found matching mystery for event', requestedMystery.name);

    return Events.insert({
      hostName,
      startDateTime,
      mysteryData: requestedMystery,
      currentPhase,
      hostCharacterID,
      phases,
    });
  },
  'Events.removeAll': () => {
    console.log('Deleting all events');
    return Events.remove({});
  },

  'Events.getCharacterStatus': (eventID, characterID) => {
    const requestedMystery = Events.findOne({ name: mysteryName });
    return Events.remove({});
  },

});

Meteor.publish('events', () => Events.find());

export default Events;
