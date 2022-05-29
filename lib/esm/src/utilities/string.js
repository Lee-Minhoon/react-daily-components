export var replaceAt = function (str, index, char) {
    return str.slice(0, index) + char + str.slice(index + 1);
};
