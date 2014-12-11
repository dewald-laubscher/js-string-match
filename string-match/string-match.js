//wondering if this is proper

var breakString = function (string) {
	// for single layer comparison
	string = string.toLowerCase().replace(/\s+/g, '');
	var array = [];

	for (i in string) {
		array[array.length] = string[i];
	}

	// for multi layer comparison
	// var array = string.toLowerCase().split(' ');
	// var innerArray = [];

	// for(i in array) {
	// 	for (ii in array[i]) {
	// 		innerArray[ii] = array[i][ii];
	// 	}
	// 	array[i] = innerArray;
	// 	innerArray = [];
	// }

	return array;
}


module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareString, toString, options) {
		if (typeof options !== undefined) options = [];

		var percentage = 1; //0-1

		compareArray = breakString(compareString, options.noParthesis);
		toArray = breakString(toString);
		console.log(compareArray);
		console.log(toArray);

		return percentage;
	}
};