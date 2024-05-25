"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var mathAddOperacion;
    mathAddOperacion = addNumbers;
    console.log(mathAddOperacion(1, 2));
    var greet = function (name) { return "Hola ".concat(name); };
    var stringGreet;
    stringGreet = greet;
    console.log(stringGreet('Fernando'));
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var returnString;
    returnString = saveTheWorld;
    console.log(returnString());
})();
//# sourceMappingURL=fuction-type.js.map