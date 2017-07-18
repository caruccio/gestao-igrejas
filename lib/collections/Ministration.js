import { SimpleSchema } from "meteor/aldeed:simple-schema";

Ministration = new Mongo.Collection("Ministration");

var schema = new SimpleSchema({
    ministration: {
        type: String,
        label: "Ministério",
        optional: false
    },
    type: {
        type: String,
        label: "Tipo",
        optional: false,
        allowedValues: ['Pastoral', 'Louvor', 'Jovem', 'Família', 'Célula', 'Evangelismo', 'Áudio', 'Broadcast', 'Adolescente', 'Infantil']
    },
    responsible: {
        type: String,
        label: "Responsável",
        optional: false
    }
});

Ministration.attachSchema(schema);
