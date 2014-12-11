(function () {
	sm = require('../string-match/string-match.js');

	//init vars
	var compareString = 'A P Khumalo',
			toString = 'AP Khumalo Ext 1, 2 (Katlehong)',
			options = [];

	(function () {
		var percentage = sm.stringMatch(compareString, toString, options);
	}).call(this);
}).call(this);