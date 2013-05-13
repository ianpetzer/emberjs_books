#Rails Ember.js books

This is a demo-app for Ember.js, using a Rails server

If you have rails installed on your machine, you can clone this repo and start up a Rails server in this directory. The app is hosted at http://localhost:3000

All of the Ember.js functionality can be found in the assets/javascript folder.

In the store.js file you can choose which adapter you want Ember-Data to use. The FixtureAdapter will keep everything in the browser. The RestAdapter will delegate to the server to perform the CRUD operations on the entities

##Integration Testing:

The integration tests are written using qunit and the new Ember.j integration testing framework. The test page has a div containing displaying the instance of the app being tested and you can see the integration tests driving the user interface right in front of your eyes. It is fast!

In order to run the integration tests, start up the server in test mode:
RAILS_ENV=test rails server
and then navigate to:
http://localhost:3000/qunit

Strictly speaking you don't currently need to start up in test mode, but in a real world app you might have fixtures or a test database set up that you want to make available to the integration tests.


