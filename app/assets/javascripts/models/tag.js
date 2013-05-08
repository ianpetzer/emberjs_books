App.Tag = DS.Model.extend ({
  name: attr('string'),
  books: DS.hasMany('App.Book', { inverse: 'tags' })
});

App.Tag.FIXTURES = [{
  id: 1,
  name: 'Fiction'
}, {
  id: 2,
  name: 'Non-Fiction'
}, {
  id: 3,
  name: 'Classic'
}, {
  id: 4,
  name: 'Contemporary'
}, {
  id: 5,
  name: 'Science fiction'
}, {
  id: 6,
  name: 'Bestseller'
}, {
  id: 7,
  name: 'Ideal gift'
} ];

