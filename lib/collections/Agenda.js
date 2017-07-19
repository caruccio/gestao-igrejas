import { SimpleSchema } from "meteor/aldeed:simple-schema";

Agenda = new Mongo.Collection("Agenda");

var schema = new SimpleSchema({
  name: {
      type: String,
      label: "Evento",
      optional: false
  },
  dateOfEvent: {
      type: Date,
      label: "Data e Hora do Evento",
      optional: false,
      autoform: {
         type: 'datetime-local'
      }
  },
  description: {
      type: String,
      label: "Descrição",
      optional: false
  },
  place: {
      type: String,
      label: "Local",
      optional: false
  }
});

Agenda.attachSchema(schema);
