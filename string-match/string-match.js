module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareString, toString) {
		var percentage = 0; //0-1
		compareArray = breakString(compareString);
		toArray = breakString(toString);

		return percentage;
	}
		//wondering if this would be feasable as a helper in a module
		function breakString(string) {
			var array = string.split(' ');
			var innerArray = [];

			for(i in array) {
				for (ii in array[i]) {
					innerArray[ii] = array[i][ii];
				}
				array[i] = innerArray[ii];
			}
			return array;
		}
};