DS.RESTAdapter.configure("plurals", {
    book: "books"
});

window.attr = DS.attr

App.Store = DS.Store.extend({
  revision: 12,
  //adapter: DS.RESTAdapter.create({ bulkCommit: false })
  adapter: DS.FixtureAdapter.create()
})

