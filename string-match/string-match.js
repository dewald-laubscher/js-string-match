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
		- char: the charaacter to whom these properties belong
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
				if (recur < 0) recur = +ii;
				count++;
			}
		}
		object[i] = {'char': array[i],'count': count,'recur': recur,'fromEnd': array.length - i - 1}
		return object;
	}
	return {};
}
var inspection = function (compareObj, toObj) {
	var percentage = 0,
			starting = [],
			doIndex = 0,
			doWhile = percentage < 80 && doIndex < starting.length;
	starting = startingPositions(compareObj, toObj);

	// do {
	// } while (doWhile);

}

var startingPositions = function (compareObj, toObj) {
	/*
		find nodes in toString/obj that are feasable for starting position
	*/
	var startObj = {},
			starting = [],
			weight = {
				'char': 5,
				'descendant': 3,
				'count': 3,
				'recur': 1,
				'fromEnd': 3,
				setTotal: function () {
					var total = 0,
							amount = 0;
					for (i in this) {
						if (typeof this[i] === 'number') {
							total = (+total) + (+this[i]);
						}
					};
					this['total'] = total;
				}
			};

	// init
	weight.setTotal();

	//main
	for(i in toObj) {
		var isFromEnd = toObj[i].fromEnd >= compareObj[0].fromEnd;

		startObj[i] = {'value': 0};
		if (toObj[i].char === compareObj[0].char) {
			startObj[i]['value'] = startObj[i]['value'] + (1 * (weight.char / weight.total));
		}
		if (toObj[i].count >= compareObj[0].count) {
			startObj[i]['value'] = startObj[i]['value'] + (1 * (weight.count / weight.total));
		}
		if (isFromEnd) {
			startObj[i]['value'] = startObj[i]['value'] + (1 * (weight.fromEnd / weight.total));
		}
		if (toObj[i].recur >= compareObj[0].recur) {
			startObj[i]['value'] = startObj[i]['value'] + (1 * (weight.recur / weight.total));
		}
		if (toObj[+i+1] && isFromEnd) {
			if (toObj[+i+1].char === compareObj[1].char) {
				startObj[i]['value'] = startObj[i]['value'] + (1 * (weight.descendant / weight.total));
			}
		}
	}
	for (i in startObj) {
		if (startObj[i].value > .5) starting[starting.length] = i;
	}
	return starting;
}

module.exports = {
	/*this function returns percentage value*/
	stringMatch: function (compareStr, toStr, options) {
		if (typeof options !== undefined) options = [];

		var percentage = -1, //0-1 if successfull
				object = {};

		// build arrays
		compareArray = breakString(compareStr);
		toArray = breakString(toStr);

		// from arrays to objects
		compareObject = introspection(compareArray, compareArray.length);
		toObject =  introspection(toArray, toArray.length);

		inspection(compareObject, toObject);

		return percentage;
	}
};