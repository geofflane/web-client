import Ember from 'ember';
import { searchStops } from 'bus-detective/utils/api';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true
    }
  },

  model: function(params) {
    if (params.name) {
      return searchStops(params);
    } else {
      return [];
    }
  },

  setupController: function(controller, model) {
    controller.set('stops', model);
  }
});
