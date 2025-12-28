<!-- Random notes and not in book and listing will be here -->

## console.__()

- if console not avalaible
```
if (!window.console)
{
    console = {log: function() {}};
}
```

### list

```
.assert()
.clear()
.count()
.countReset()
.debug()
.dir()
.dirxml()
.error()
.group()
.groupCollapsed()
.groupEnd()
.info()
.log()
.trace()
.table()
.time()
.timeEnd()
.timeLog()
.timeStamp()
.warn()

// not in vscode
.markTimeline
.profile
.profileEnd
.timeline
.timelineEnd
```

### for C-style formatting

%s          - Formats the value as a string
%i or %d    - or %d Formats the value as an integer
%f          - Formats the value as a floating point value
%o          - Formats the value as an expandable DOM element
%O          - Formats the value as an expandable JavaScript object
%c          - Applies CSS style rules to the output string as specified by the second parameter

```js
console.log("%cHello %cWorld%c!!", // string to be printed
            "color: blue;", // applies color formatting to the 1st substring
            "font-size: xx-large;", // applies font formatting to the 2nd substring
            "/* no CSS rule*/" // does not apply any rule to the remaining substring
);
```

## All in built data types

<!-- pending -->

## Random notes

- canvas (raster images), svg (vector-based)
- `null` - intentional absence of value and is a primitive value
- `undefined` is a global value that represents the absence of an assigned value
- JSON serialization, may strip `undefined` properties from objects
- `null == undefined` but `null !== undefined`
- `typeof null` -> `object`
- use `Number.isNaN()` instead of `window.isNaN()`
- `Infinity` - a property of the global object (therefore a global variable) that represents mathematical infinity. It is a reference to Number.POSITIVE_INFINITY
- `Number.EPSILON` represents the different between one and the smallest Number greater than one
- we can not call `.timeEnd()` multiple times
- `typeof __` - return string containing type
- `instanceof __` - return boolean whether it is instance or not
- primitive values are not considered instances of any class
- '' / "" / `` / String() / ( 1 | true | {} | any ).toString() to create string
- `String.fromCharCode(104,101,108,108,111)` - "hello"
- `"s1".localeCompare("s2")` -> if s1 is < returns -1 if s1 is > returns 1 else 0
- UTC and Locale time are different
- Number("0") and new Number("0") isn't the same thing! While the former performs a type conversion, the latter will create a new object. Objects are compared by reference and not by value which explains the results below
- Subtracting a string from a string, does not generate an error but returns NaN (Not a Number)
- Logical OR (||), reading left to right, will evaluate to the first truthy value. If no truthy value is found, the last value is
returned
- Logical AND (&&), reading left to right, will evaluate to the first falsy value. If no falsey value is found, the last value is returned
- all objects are truthy and Array is an instance of Object, but [] == false - true (as [] -> '' -> 0)
-  cannot use return or break with ternaries
- "fall through" allows to execute multiple switch cases
- avoid cyclic reference
- Use delete to remove item from array without changing the length of array
- JSON.stringify will convert Date objects to ISO-format string representations, but JSON.parse will not convert the string back into a Date
- for...in will go in prototype chain i.e. for...in + _.hasOwnProperty() === _.keys()
- Bitwise operators perform operations on bit values of data. These operators convert operands to signed 32-bit integers in two's complement.
- in for ++i is used to ensures that a temporarily variable isn't needlessly created (to return the value prior to the operation)
- Math.atan(yComponent, xComponent) return the angle in radius within the range of -Math.PI to Math.PI (-180 to 180 deg)
- constructor function
- The var keyword creates a function-scope variable.
- The let keyword creates a block-scope variable.
- The const keyword creates a block-scope variable that cannot be reassigned.
- A bare declaration creates a global variable.
- name an IIFE - providing a reference which can be used for a recursion and can make debugging simpler as the name is included in the callstack.
- named functions are hoisted
- use named functions more, has hoisting and show name in call trace, has own this, and arguements
- use anonymouse function is callback, not required this and arguements, no hoisting, no name in call trace
- dependency injections" or "callbacks", because it allows the function your calling to "call back" to your code, giving you an opportunity to change the way the called function behaves.
- use modules instead of IIFE
- function can also be set as the default parameter value callback = function(){};
- `myFunction.name` returns name of the function
- use arrow functions in callbacks
- this in cunstructor function uses parent context or new object while using `new`
