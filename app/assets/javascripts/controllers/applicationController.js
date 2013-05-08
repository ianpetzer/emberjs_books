App.ApplicationController = Ember.Controller.extend({

  needs: ['index'],
  title: '',
  author: '',

  search: function () {
    this.get('controllers.index').set('searchResults', App.Book.find());
    this.transitionToRoute('index');
  }

});