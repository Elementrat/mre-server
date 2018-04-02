import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const Mysteries = new Mongo.Collection('mysteries');

// Name - what is the mystery called
// minPlayers - how many required chars
// maxPlayers - how many optional chars
// summary - brief overview of setting, plot
// characters - array of character objects
// items - array of item objects

Meteor.methods({
  'Mysteries.insertOne': ({
    name,
    summary = 'no summary',
    minPlayers = -1,
    maxPlayers = -1,
    currencyName = 'dollars',
    currentPhaseName = 'pre-game',
    characters = [],
    phases = [],
  }) => {
    console.log('Adding mystery with name', name);
    return Mysteries.insert({
      name,
      summary,
      minPlayers,
      maxPlayers,
      currencyName,
      currentPhaseName,
      characters,
      phases,
    });
  },
  'Mysteries.removeAll': () => {
    console.log('Deleting all mysteries');
    return Mysteries.remove({});
  }
});

Meteor.publish('mysteries', () => {
  return Mysteries.find();
});

export default Mysteries;
