  App.BooksEditController = Ember.ObjectController.extend({

  newTag: {},

  save: function () {
    this.get('store').commit();
    this.transitionToRoute('books.show', this.get('model'));
  },

  addAnotherTag: function(tag) {
    var thisBook = this.get('model');
    var tag = thisBook.get('tags').createRecord();    
  },

  removeTag: function(tag) {
    //this.get('model').get('tags').removeObject(tag);    
    tag.deleteRecord();
  }

});
