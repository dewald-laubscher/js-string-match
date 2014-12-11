//wondering if this is proper

var breakString = function (string) {

	var array = string.toLowerCase().split(' ');
	var innerArray = [];

	for(i in array) {
		for (ii in array[i]) {
			innerArray[ii] = array[i][ii];
		}
		array[i] = innerArray;
		innerArray = [];
	}
	return array;
}

var introspection = function (index, array) {
	obj = 0: {'index':index,'start':0};
	for (var i = 0; i >= array.length && i > index; i++) {
		for (var ii =  0; ii < array[i].length; i++) {
			array[i][ii]
		};
		array[i]
	};
}

module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareString, toString, options) {
		if (typeof options !== undefined) options = [];

		var percentage = 1; //0-1
		var introspectrum = [];

		compareArray = breakString(compareString);
		toArray = breakString(toString);

		for (var i =  0; i < compareArray.length; i++) {
			introspectrum[i] = introspection(i, compareArray);
		};

		return percentage;
	}
};