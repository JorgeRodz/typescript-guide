"use strict";
(function () {
    var AudiLevel;
    (function (AudiLevel) {
        AudiLevel[AudiLevel["min"] = 1] = "min";
        AudiLevel[AudiLevel["medium"] = 2] = "medium";
        AudiLevel[AudiLevel["max"] = 10] = "max";
    })(AudiLevel || (AudiLevel = {}));
    var currenAudio = AudiLevel.max;
    console.log(currenAudio);
    console.log(AudiLevel);
})();
//# sourceMappingURL=enum.js.map