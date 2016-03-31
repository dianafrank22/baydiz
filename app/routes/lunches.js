import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return['Slacker', 'Wolf', 'Sam Special', 'Bay Deli Special', 'Monterey Melt', 'Fleets Coves'];
	}
});
