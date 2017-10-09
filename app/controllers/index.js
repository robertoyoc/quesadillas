import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registrar(emailR, perfilR){
      var newR = this.store.createRecord('account', {
        email: emailR,
        perfil: perfilR
      });
      newR.save();
    }
  }
});
