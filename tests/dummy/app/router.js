import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('installation');
    this.route('quickstart');
    this.route('api', function() {
      this.route('class', {
        path: '/:class_id'
      });
    });
  });
  this.route('not-found', {
    path: '/*path'
  });
});

export default Router;
