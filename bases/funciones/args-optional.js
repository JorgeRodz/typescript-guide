"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        console.log({ firstName: firstName, lastName: lastName });
        return "".concat(firstName, " ").concat(lastName || '"----------"');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=args-optional.js.map