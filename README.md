# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @onandrew/lotide`

**Require it:**

`const _ = require('@onandrew/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual.js(...)`: compares if two arrays are equal and returns message based on result
* `assertEqual.js(...)`: compares if two values are equal
* `assertObjectsEqual.js(...)`: compares if two objects are equal and returns message based on result
* `countLetters.js(...)`: counts the number of letters in a string
* `countOnly.js(...)`: count items in array in object
* `eqArrays.js(...)`: compares if two arrays are equal
* `eqObjects.js(...)`: compares if two objects are equal
* `findKey.js(...)`: find a key based on callback function
* `findKeyByValue.js(...)`: find a key based on value
* `flatten.js(...)`: converts nested arrays into a single array
* `head.js(...)`: returns first value in array
* `index.js(...)`: index file for exporting modules
* `letterPositions.js(...)`: returns positions of a value in an array
* `map.js(...)`: returns value in specific value for multiple items in array
* `middle.js(...)`: returns middle value(s) in array
* `tail.js(...)`: returns every value except the first in an array
* `takeUntil.js(...)`: returns value in order in the array until specified parameter
* `without.js(...)`: removes specific value from array and returns the rest
