// console.log("Hello, JavaScript!");

// function wordCount( val ){
//     var wom = val.match(/\S+/g);
//     return {
//         charactersNoSpaces : val.replace(/\s+/g, '').length,
//         characters         : val.length,
//         words              : wom ? wom.length : 0,
//         lines              : val.split(/\r*\n/).length
//     };
// }

// console.log(wordCount("hello, my name is this !"))

// // TODO: alsdkf

// console.group("expanded")
// console.time('response in');
// console.log('executed.....');
// console.groupCollapsed("collapsed");
// console.timeEnd('response in');
// console.log(['string'], 1, {}, window);
// console.groupEnd();
// console.log("%cHello %cWorld%c!!", // string to be printed
//             "color: blue;", // applies color formatting to the 1st substring
//             "font-size: xx-large;", // applies font formatting to the 2nd substring
//             "/* no CSS rule*/" // does not apply any rule to the remaining substring
// );
// console.groupEnd();

// console.log([0, 3, 32, 'a string']);
// console.log({ key1: 'value', key2: 'another value'});
// console.log(new Date());
// console.log(function test(/** @type {any} */ a, /** @type {any} */ b) { return a + b; });
// let a = 92;
// console.info(a)
// console.warn(a)
// console.error(a)
// console.log(typeof /aaa/ );

// console.log("❤️❤️".codePointAt(3));

// var myIterableObject = {
//     // An Iterable object must define a method located at the Symbol.iterator key:
//     [Symbol.iterator]: () => {
//         // The iterator should return an Iterator object
//         return {
//             // The Iterator object must implement a method, next()
//             next: function () {
//                 // next must itself return an IteratorResult object
//                 if (!this.iterated) {
//                     this.iterated = true;
//                     // The IteratorResult object has two properties
//                     return {
//                         // whether the iteration is complete, and
//                         done: false,
//                         // the value of the current iteration
//                         value: 'One'
//                     };
//                 }
//                 return {
//                     // When iteration is complete, just the done property is needed
//                     done: true
//                 };
//             },
//             iterated: false
//         };
//     }
// }
// for (const c of myIterableObject) {
//     console.log(c);
// }

// var isLittleEndian = true;
// (()=>{
//     var buf = new ArrayBuffer(4);
//     var buf8 = new Uint8ClampedArray(buf);
//     var data = new Uint32Array(buf);
//     data[0] = 0x0F000000;
//     if(buf8[0] === 0x0f){
//         isLittleEndian = false;
//     }
// })();

// function cat(name) {
//     this.name = name;
//     this.sound = "meow";
//     this.run = () => {
//         console.log("running");
//     };
// }

// let ct = new cat("asdf");
// cat.prototype.eat = () => {
//     console.log("asdf");
// }
// console.dir(ct.eat())

let prism = l => b => h => l * b * h;

let l = prism(2);
console.log(l(2)(3));
