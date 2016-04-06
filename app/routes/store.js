import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
     showModal: function(name, model) {
       this.render(name, {
         into: 'store',
         outlet: 'modal',
         model: model
       });
     },
     removeModal: function() {
       this.disconnectOutlet({
         outlet: 'modal',
         parentView: 'store'
       });
     }
   }
 });
