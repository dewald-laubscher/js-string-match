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

var introspection = function (array, i) {
	var count = 0;
	/*
		Parameters
		- array: to introspect
		- i: length of array
		will return object
		- count: shou occurances
		- recur: show first recuring index after object
		- fromEnd: show count from end
	*/
	var i = i - 1;
	if (i >= 0) {
		var object = introspection(array, i);
		var recur = -1;
		for (ii in array) {
			if (ii > i && array[i] === array[ii]) {
				if (recur < 0) recur = ii;
				count++;
			}
		}
		object[i] = {'char': array[i],'count': count,'recur': recur,'fromEnd': array.length - i - 1}
		return object;
	}
	return {};
}
var inspection = function (compareObj, toObj) {}

module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareStr, toStr, options) {
		if (typeof options !== undefined) options = [];

		var percentage = 1, //0-1
				object = {};

		compareArray = breakString(compareStr, options.noParthesis);
		toArray = breakString(toStr);

		compareObject = introspection(compareArray, compareArray.length);
		toObject =  introspection(toArray, toArray.length);

		inspection

		return percentage;
	}
};