import Ember from 'ember';

export default Ember.Mixin.create({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  beforeModel(transition){
   // debugger
    return this.get('currentUser').loadAccount().then(()=>{
      //debugger
      if(!this.get('currentUser.isAuthenticated')){
        //debugger
        //this.set('application.__attemptedTransition', transition);
        return this.transitionTo('login');
      }
    });
  }
});
