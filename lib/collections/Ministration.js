Ministration = new Mongo.Collection("Ministration");

var schema = new SimpleSchema({
    ministration: {
        type: String,
        label: "Ministério",
        optional: false
    },
    responsible: {
        type: String,
        label: "Responsável",
        optional: false
    }
});

Ministration.attachSchema(schema);
