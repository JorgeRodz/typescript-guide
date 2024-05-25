"use strict";
(function () {
    var fullName = function (firstNmae) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstNmae, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');
    console.log({ superman: superman });
})();
//# sourceMappingURL=args-rest.js.map