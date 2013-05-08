App.BooksNewRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.transitionToRoute('books.edit', App.Book.createRecord())
  }
});