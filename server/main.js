import { Meteor } from 'meteor/meteor';
import '../imports/api/items';
import '../imports/api/mysteries';
import '../imports/api/events';
import '../imports/api/connections';

Meteor.startup(() => {
  // reset();
});


Meteor.onConnection((connection) => {
  console.log('somebody connected!', connection.id);

  connection.onClose(() => {
    console.log('do we still have it? ', connection.id);
    Meteor.call('Connections.getCharacterForExistingConnection', { connectionID: connection.id }, (err, result) => {
      console.log('failure: ', err);
      if (result) {
       Meteor.call('Events.setCharacterOffline', result);
      }
    });
  });
});
