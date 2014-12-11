//wondering if this is proper

var breakString = function (string) {

	var array = string.toLowerCase().split(' ');
	var innerArray = [];

	for(i in array) {
		for (ii in array[i]) {
			innerArray[ii] = array[i][ii];
		}
		array[i] = innerArray[ii];
	}
	return array;
}

module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareString, toString, options) {
		if (typeof options !== undefined) options = [];

		var percentage = 0; //0-1

		compareArray = breakString(compareString);
		toArray = breakString(toString);
		console.log(compareArray + '\n' + toArray);

		return percentage;
	}
};