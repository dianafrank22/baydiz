import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return['Eggs, French Toast, Homefries, Oatmeal', 'Meats: Bacon, Sausage, Ham, Turkey', 'Eggs: Scrambeled, Over-Medium, Fried, Over-Easy, Whites', 'Cheese: American, Swiss, Cheddar', 'Served on 12 grain, whole wheat, rye, white, kaiser roll, onion roll, wraps, plate'];
	}
});
