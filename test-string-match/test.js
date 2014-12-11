(function () {
	sm = require('../string-match/string-match.js');

	//init vars
	var compareString = 'AP Khumalo Ext 1, 2 (Katlehong)',
			toString = 'A P Khumalo',
			options = [];

	(function () {
		var percentage = sm.stringMatch(compareString, toString, options);
	}).call(this);
}).call(this);