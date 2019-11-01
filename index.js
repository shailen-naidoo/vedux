"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Store = /** @class */ (function () {
    function Store(state) {
        if (state === void 0) { state = {}; }
        this.state = {};
        this.state = state;
    }
    Store.prototype.getState = function () {
        return __assign({}, this.state);
    };
    Store.prototype.commit = function (handler) {
        var newState = handler(__assign({}, this.state));
        var mergedState = __assign(__assign({}, this.state), newState);
        this.state = mergedState;
        return mergedState;
    };
    return Store;
}());
var Vedux = {
    install: function (vue) {
        vue.mixin({
            beforeCreate: function () {
                // @ts-ignore
                var store = this.$options.store;
                this.$options.data = {
                    store: store
                };
            }
        });
    }
};
exports.default = { Store: Store, Vedux: Vedux };
//# sourceMappingURL=index.js.map