import { SimpleSchema } from "meteor/aldeed:simple-schema";

Member = new Mongo.Collection("Member");

var schema = new SimpleSchema({
  name: {
      type: String,
      label: "Nome",
      optional: false
  },
  dateOfBirth: {
      type: Date,
      label: "Nascimento",
      optional: false
  },
  register: {
      type: Date,
      label: "Cadastro",
      optional: false
  },
  gender: {
      type: String,
      label: "Genêro",
      optional: false,
      allowedValues: ['Masculino', 'Feminino']
  },
  maritalStatus: {
      type: String,
      label: "Estado Civil",
      optional: false,
      allowedValues: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)']
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

Member.attachSchema(schema);
