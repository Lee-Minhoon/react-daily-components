"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAt = void 0;
var replaceAt = function (str, index, char) {
    return str.slice(0, index) + char + str.slice(index + 1);
};
exports.replaceAt = replaceAt;
