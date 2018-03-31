import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


const Mysteries = new Mongo.Collection('mysteries');

// Name - what is the mystery called
// minPlayers - how many required chars
// maxPlayers - how many optional chars
// summary - brief overview of setting, plot
// characters - array of character objects
// items - array of item objects

Meteor.methods(
  {
    'Mysteries.insertOne': ({ name, minPlayers = -1, maxPlayers = -1, summary = 'no summary', characters = [], currencyName = 'dollars' }) => {
      console.log('Adding mystery with name', name);
      return Mysteries.insert({
        name, minPlayers, maxPlayers, summary, characters, currencyName,
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
