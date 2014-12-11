//wondering if this is proper

var breakString = function (string) {
	var array = [];
	for (i in string.toLowerCase()) {
		array 
	}

	// for two layers string comparison, cant wrap my head around this yet
	// var array = string.toLowerCase().split(' ');
	// var innerArray = [];

	// for(i in array) {
	// 	for (ii in array[i]) {
	// 		innerArray[ii] = array[i][ii];
	// 	}
	// 	array[i] = innerArray;
	// 	innerArray = [];
	// }
	// return array;
}


module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareString, toString, options) {
		if (typeof options !== undefined) options = [];

		var percentage = 1; //0-1
		var introspectrum = [];

		compareArray = breakString(compareString);
		toArray = breakString(toString);

		return percentage;
	}
};