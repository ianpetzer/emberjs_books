  App.BooksEditController = Ember.ObjectController.extend({

  helloFromController: function() {
    //return 'Hello from controller'
    return this.get('model').get('title');
  }.property('title'),

  save: function () {
    this.get('store').commit();
    this.transitionToRoute('books.show', this.get('model'));
  },

  addAnotherTag: function(tag) {
    var thisBook = this.get('model');
    var tag = thisBook.get('tags').createRecord();
  },

  removeTag: function(tag) {
    tag.deleteRecord();
  }

});
