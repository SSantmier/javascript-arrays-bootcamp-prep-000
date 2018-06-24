var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {return [element,...array]}

function destructivelyAddElementToBeginningOfArray(array, element) {array[element] = element}

function addElementToEndOfArray(array, element) {return [...array, element]} 

function destructivelyAddElementToEndOfArray(array, element) {return [array.push(element)]} FIX

function accessElementInArray(array, element) {return console.log(array[index])} FIX

function destructivelyRemoveElementFromBeginningOfArray(array, element) {return array.slice( - 1)} FIX

function destructivelyRemoveElementFromEndOfArray(array, element) {return array.slice(0, array.lenght - 1)} FIX

function removeElementFromBeginningOfArray(array) {return array.shift()} FIX