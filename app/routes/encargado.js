import Ember from 'ember';
import AuthenticatedRoute from 'quesadillas-ember/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRoute, {
  session: Ember.inject.service(),
  beforeModel(){
    return this.get('session').fetch().catch(function() {});
  }

});
