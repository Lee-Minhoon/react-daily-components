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
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var PageItem_1 = require("./PageItem");
var Style = require("./style");
var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, block = _a.block, handleClick = _a.handleClick, _b = _a.isShowFirstAndLast, isShowFirstAndLast = _b === void 0 ? true : _b, _c = _a.isShowDeactiveButton, isShowDeactiveButton = _c === void 0 ? true : _c, width = _a.width, _d = _a.gap, gap = _d === void 0 ? 10 : _d, _e = _a.fontSize, fontSize = _e === void 0 ? 16 : _e, _f = _a.color, color = _f === void 0 ? "gray" : _f, containerStyle = _a.containerStyle, firstPageRenderItem = _a.firstPageRenderItem, prevPageRenderItem = _a.prevPageRenderItem, nextPageRenderItem = _a.nextPageRenderItem, lastPageRenderItem = _a.lastPageRenderItem;
    var currentBlock = Math.floor((currentPage - 1) / block) + 1;
    var startPage = currentBlock * block - (block - 1);
    var endPage = Math.min(currentBlock * block, totalPages);
    var render = function () {
        var result = [];
        var isFristPageActivate = !(currentPage === 1);
        var isShowFirstPage = isShowDeactiveButton || (!isShowDeactiveButton && isFristPageActivate);
        result.push(isShowFirstAndLast && isShowFirstPage && ((0, jsx_runtime_1.jsx)(PageItem_1.default, __assign({ activate: isFristPageActivate, targetPage: 1, handleClick: handleClick }, { children: firstPageRenderItem !== null && firstPageRenderItem !== void 0 ? firstPageRenderItem : ((0, jsx_runtime_1.jsxs)(Style.Svg, __assign({ viewBox: "0 0 20 20", activate: isFristPageActivate, color: color }, { children: [(0, jsx_runtime_1.jsx)("polyline", { points: "18 2 10 10 18 18 10 10" }), (0, jsx_runtime_1.jsx)("polyline", { points: "10 2 2 10 10 18 2 10" })] }))) }), "firstPage")));
        var isPrevPageActivate = startPage > 1;
        var isShowPrevPage = isShowDeactiveButton || (!isShowDeactiveButton && isPrevPageActivate);
        result.push(isShowPrevPage && ((0, jsx_runtime_1.jsx)(PageItem_1.default, __assign({ activate: isPrevPageActivate, targetPage: startPage - 1, handleClick: handleClick }, { children: prevPageRenderItem !== null && prevPageRenderItem !== void 0 ? prevPageRenderItem : ((0, jsx_runtime_1.jsx)(Style.Svg, __assign({ viewBox: "0 0 20 20", activate: isPrevPageActivate, color: color }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "14 2 6 10 14 18 6 10" }) }))) }), "prevPage")));
        for (var i = startPage; i <= endPage; i++) {
            var activate = !(i === currentPage);
            result.push((0, jsx_runtime_1.jsx)(PageItem_1.default, __assign({ activate: activate, targetPage: i, handleClick: handleClick }, { children: (0, jsx_runtime_1.jsx)(Style.Item, __assign({ activate: activate, fontSize: fontSize, color: color }, { children: i })) }), i));
        }
        var isNextPageActivate = endPage < totalPages;
        var isShowNextPage = isShowDeactiveButton || (!isShowDeactiveButton && isNextPageActivate);
        result.push(isShowNextPage && ((0, jsx_runtime_1.jsx)(PageItem_1.default, __assign({ activate: isNextPageActivate, targetPage: endPage + 1, handleClick: handleClick }, { children: nextPageRenderItem !== null && nextPageRenderItem !== void 0 ? nextPageRenderItem : ((0, jsx_runtime_1.jsx)(Style.Svg, __assign({ viewBox: "0 0 20 20", activate: isNextPageActivate, color: color }, { children: (0, jsx_runtime_1.jsx)("polyline", { points: "6 2 14 10 6 18 14 10" }) }))) }), "nextPage")));
        var isLastPageActivate = !(currentPage === totalPages);
        var isShowLastPage = isShowDeactiveButton || (!isShowDeactiveButton && isLastPageActivate);
        result.push(isShowFirstAndLast && isShowLastPage && ((0, jsx_runtime_1.jsx)(PageItem_1.default, __assign({ activate: isLastPageActivate, targetPage: totalPages, handleClick: handleClick }, { children: lastPageRenderItem !== null && lastPageRenderItem !== void 0 ? lastPageRenderItem : ((0, jsx_runtime_1.jsxs)(Style.Svg, __assign({ viewBox: "0 0 20 20", activate: isLastPageActivate, color: color }, { children: [(0, jsx_runtime_1.jsx)("polyline", { points: "10 2 18 10 10 18 18 10" }), (0, jsx_runtime_1.jsx)("polyline", { points: "2 2 10 10 2 18 10 10" })] }))) }), "lastPage")));
        return result;
    };
    return ((0, jsx_runtime_1.jsx)(Style.Pagination, __assign({ width: width, fontSize: fontSize, style: containerStyle }, { children: (0, jsx_runtime_1.jsx)(Style.List, __assign({ gap: gap }, { children: render() })) })));
};
exports.default = Pagination;
