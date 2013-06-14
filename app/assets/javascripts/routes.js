App.Router.map(function () {
  this.resource('books', function() {
    this.route('edit', {path: ':book_id/edit'} );
    this.route('show', {path: ':book_id/show'} );
    this.route('new');
  });
});
