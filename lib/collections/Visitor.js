import { SimpleSchema } from "meteor/aldeed:simple-schema";

Visitor = new Mongo.Collection("Visitor");

var schema = new SimpleSchema({
    name: {
        type: String,
        label: "Nome",
        optional: false
    },
    visitation: {
        type: Date,
        label: "Data da Visita",
        optional: false
    },
    dateOfBirth: {
        type: Date,
        label: "Nascimento",
        optional: false
    },
    gender: {
        type: String,
        label: "Genêro",
        optional: false,
        allowedValues: ['Masculino', 'Feminino']
    },
    email: {
        type: String,
        label: "E-mail",
        optional: true
    },

    phone: {
        type: String,
        label: "Celular ou Fixo",
        optional: true
    },

    ministration: {
        type: Array,
        optional: false,
        label: "Aceita Receber de:"
    },

    'ministration.$': {
        type: Object,
    },

    'ministration.$.ministration': {
        type: String,
        label: "Ministério",

        autoform: {
            options: function () {
                var options =  Ministration.find({}).map(function (c) {
                    return {label: c.ministration, value: c.ministration};
                });
                return options;
            }
        }
    },

    firstContact: {
      type: Boolean,
      label: "1° Pós-visita realizado?",
      optional: false
    }
});

Visitor.attachSchema(schema);
