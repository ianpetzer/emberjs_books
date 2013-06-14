module("Ember.js Library", {
  setup: function() {
    console.log('setting up');
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    console.log('tearing down');
    App.reset();
  }
});

test("Check HTML is returned", function() {

  visit("/").then(function() {
    ok(exists("*"), "Found HTML!");
  });

});

test("Check retrieval of books", function() {
  expect(6);

  visit("/").then(function() {
    ok(exists(".navBar"), "The navbar was rendered");
    ok(exists("#searchButton"), "SearchButton was found");
  });

  visit("/").then(function() {
    return click("#searchButton");
  }).then(function() {

    equal(find(".searchResult").length, 3, "Retrieved correct number of search results");
    ok(exists(".searchResult h2:contains('The Great Gatsby')"), "Retrieved title of first book");
    ok(exists(".searchResult h2:contains('The Prince')"), "Retrieved title of second book");
    ok(exists(".searchResult h2:contains('Slaughterhouse-Five')"), "Retrieved title of third book");
  })
});

test("Check editing of a book updates search results", function() {
  expect(7);

  visit("/").then(function() {
    return click("#searchButton");  //Click the search button
  }).then(function() {

   throws(
      function() {
        find(".searchResult h2:contains('The Great Modification')") ;
      },
      "No existing called the Great Modification"
    );

    return click(".searchResult h2:contains('The Great Gatsby') ~ a");  //Select the search result for The Great Gatsby
  }).then(function() {

    equal($.trim(find(".tags ul li:first").text()), "Fiction", "Found first tag");
    equal($.trim(find(".tags ul li:eq(1)").text()), "Classic", "Found second tag");
    return click("#editBook");  //Click the search button
  }).then(function() {

    equal(find(".titleInputBox").val(), "The Great Gatsby", "Found book title input box");
    fillIn(".titleInputBox", ".editBook", "The Great Modification");
    equal(find(".titleInputBox").val(), "The Great Modification", "Title of book changed on edit page");
    return click(".saveEditsToBook");  //Save the changes
  }).then(function() {

    return click("#searchButton"); //Click the search button
  }).then(function() {

    ok(exists(".searchResult h2:contains('The Great Modification')"), "Retrieved modified title from search list");

    throws(
      function() {
        find(".searchResult h2:contains('The Great Gatsby')") ;
      },
      "The Great Gatbsy title has been changed in the search results!"
    );

  });

});




