import { SimpleSchema } from "meteor/aldeed:simple-schema";

Church = new Mongo.Collection("Church");

var schema = new SimpleSchema({
    denomination: {
        type: String,
        label: "Denominação",
        optional: false
    },
    church: {
        type: String,
        label: "Igreja",
        optional: true
    },
    responsible: {
        type: String,
        label: "Pastor Responsável",
        optional: true
    },
    responsibleAuxiliary: {
        type: String,
        label: "Pastor Auxiliar",
        optional: true
    },
    telephone: {
        type: String,
        label: "Telefone",
        optional: true
    },
    street: {
        type: String,
        label: "Endereço",
        optional: true
    },
    number: {
        type: Number,
        label: "Número",
        optional: true
    },
    complement: {
        type: String,
        label: "Complemento",
        optional: true
    },
    zipCode: {
        type: Number,
        label: "CEP",
        optional: true
    },
    district: {
        type: String,
        label: "Bairro",
        optional: true
    }
});

Church.attachSchema(schema);
