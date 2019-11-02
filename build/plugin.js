"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Vedux = Vedux;
