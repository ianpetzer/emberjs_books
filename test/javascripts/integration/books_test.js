module('Books Ember.js Learning app', {
  setup: function() {
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    App.reset();
  }
});

test('Check retrieval of books', function() {
  expect(4);

  visit('/').then(function() {
    ok(exists('.navBar'), 'The navbar was rendered');
    ok(exists('#searchButton'), 'SearchButton was found');
  });

  visit('/').then(function() {
    return click('#searchButton');
  }).then(function() {

    equal(find('.searchResult').length, 3, 'Retrieved correct number of search results');
    equal(find('.searchResult:first h2').text(), 'The Great Gatsby', 'Retrieved title of first book');
  })
});

test('Check editing of a book updates search results', function() {
  expect(5);

  visit('/').then(function() {
    return click('#searchButton');  //Click the search button
  }).then(function() {
    return click('.searchResult:first a');  //Select the first search result
  }).then(function() {
    equal($.trim(find('.tags ul li:first').text()), 'Fiction', 'Found first tag');
    equal($.trim(find('.tags ul li:eq(1)').text()), 'Classic', 'Found second tag');
    return click('#editBook');  //Click the search button
  }).then(function() {
    equal(find('.titleInputBox').val(), 'The Great Gatsby', 'Found book title input box');
    $('.titleInputBox').val('The Great Modification');
    $('.titleInputBox').keyup(); //trigger Ember finding the change to the input box
    equal(find('.titleInputBox').val(), 'The Great Modification', 'Form input box changed');
    debugger;
    return click('.saveEditsToBook');  //Save the changes
  }).then(function() {
    debugger;
    return click('#searchButton'); //Click the search button
  }).then(function() {
    debugger;
    equal(find('.searchResult h2:contains').text(), 'The Great Modification', 'Retrieved modified title');
  });

});

