import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  perfil: DS.attr('string'),
  user: DS.attr('string')

});
