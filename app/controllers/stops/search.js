import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query', 'page'],
  query: null,
  page: 1,

  actions: {
    updatePage: function(page) {
      this.set('page', page);
    }
  }
});

