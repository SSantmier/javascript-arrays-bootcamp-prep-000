var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {return [element,...array]}

function destructivelyAddElementToBeginningOfArray(array, element) {array.unshift[element]; return array}

function addElementToEndOfArray(array, element) {return [...array, element]} 

function destructivelyAddElementToEndOfArray(array, element) {array.push(element); return array}

function accessElementInArray(array, element) {return array[index]} 

function destructivelyRemoveElementFromBeginningOfArray(array, element) {return array.slice( - 1)} FIX

function destructivelyRemoveElementFromEndOfArray(array, element) {return array.slice(0, array.length - 1)} FIX

function removeElementFromBeginningOfArray(array) {return array.slice(0, array.length - 1)} 