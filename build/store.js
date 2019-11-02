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
var events_1 = require("events");
var Store = /** @class */ (function () {
    function Store(state) {
        if (state === void 0) { state = {}; }
        this.state = {};
        this.stateObserver = new events_1.EventEmitter();
        this.state = state;
    }
    Store.prototype.getState = function () {
        return __assign({}, this.state);
    };
    Store.prototype.commit = function (handler) {
        var newState = handler(__assign({}, this.state));
        var mergedState = __assign(__assign({}, this.state), newState);
        this.stateObserver.emit('subscribe', {
            old: this.state,
            new: mergedState,
        });
        this.state = mergedState;
        return mergedState;
    };
    Store.prototype.subscribe = function () {
        var _this = this;
        return {
            result: function (handler) {
                _this.stateObserver.on('subscribe', handler);
            }
        };
    };
    return Store;
}());
exports.Store = Store;
