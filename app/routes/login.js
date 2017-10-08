import Ember from 'ember';

export default Ember.Route.extend({
  model(){

    let sucursales = this.store.findAll('sucursal');
    let turnos = this.store.findAll('turno');

    return {
      sucursal: sucursales,
      turno: turnos
    }
  }
});
