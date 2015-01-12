js-string-match (Under Development)
===============

Working on importing data to their relevant place, this thing came up.

===============
##Original

Built as a helper function, to make informed desitions for me based on the values I provide.

##stringMatch()

This is a function that will look at a string from the start to the end to see how accurate the string matches the other string. It will be done first in order, ignoring spaces, looking at how much of the individual words exsist in the string, and second from left to right if a word matches per char.

Initial description (11 December 2014)

##Commands

nodejs ./test-sring-match/test.js

##Where Are We At?

Currently I need to do proper documentation for this that will explain the feasibility of this code for data. But before this will be done I am going to add the final part of the code, rating the individual char's and finding the best node list with the highest rated path. From this a simple calculation should have a percentage value that would make the set comparison clear.

##TO-DO
-add options that i find relevant like granularity etc.
-add second level to stringy objects