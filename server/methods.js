import { Meteor } from "meteor/meteor";
import { check } from 'meteor/check'


Meteor.methods({

  removeMinistration: function(id) {
    check(id, String);
    Ministration.remove({_id: id});
  },

  removeVisitor: function(id) {
    check(id, String);
    Visitor.remove({_id: id});
  }

});
