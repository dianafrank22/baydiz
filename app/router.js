import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('breakfasts');
  this.route('lunches');
  this.route('contacts');
  this.route('catering');
});

export default Router;
