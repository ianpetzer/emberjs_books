App.Review = DS.Model.extend ({
  title: attr('string'),
  body: attr('string'),
  book: DS.belongsTo('App.Book')
});

App.Review.FIXTURES = [{
  id: 1,
  book_id: 1,
  title: 'Best read ever!!',
  body: "I really enjoyed this. Its hedonistic and exciting."
}, {
  id: 2,
  book_id: 1,
  title: 'I\'m not convinced',
  body: "This is a story of indulgence and callous indifference."
} ];

