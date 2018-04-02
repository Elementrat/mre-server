import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Connections = new Mongo.Collection('connections');

Meteor.methods({
  'Connections.addOne': ({ connectionID, eventID, characterID }) => {
    console.log('inserting connection', connectionID, 'as character: ', characterID);
    return Connections.insert({ connectionID, eventID, characterID });
  },

  'Connections.removeOne': ({ connectionID }) => {
    console.log('removing connection', connectionID);
    return Connections.remove({ connectionID });
  },

  'Connections.removeAll': () => {
    console.log('Deleting all events');
    return Connections.remove({});
  },

  'Connections.getCharacterForExistingConnection': ({ connectionID }) => {
    console.log('trying to find for', connectionID)
    return Connections.findOne({ connectionID: connectionID });
  }

});

Meteor.publish('connections', () => {
  return Connections.find({});
});

export default Connections;

