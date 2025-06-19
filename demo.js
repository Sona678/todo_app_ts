var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.name = function (params) {
        return params;
    };
    return Demo;
}());
var Demo2 = {
    name: function (params) { return params; },
};
console.log("Class ", typeof new Demo());
console.log("Object ", typeof Demo2);
