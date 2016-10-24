import DS from 'ember-data';

export default DS.Model.extend({
  header: DS.attr(),
  admin: DS.attr(),
  message: DS.attr()
});
