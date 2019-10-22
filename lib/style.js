"use strict";
/**
 * @author Luke Brandon Farrell
 * @description
 */
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
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    defaultActionTipStyle: __assign(__assign({}, react_native_1.Platform.select({
        ios: {
            position: "absolute",
            padding: 10,
            borderRadius: 5,
            backgroundColor: "black",
            shadowColor: "#303030",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 1,
        },
        android: {
            position: "absolute",
            padding: 20,
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 25,
            backgroundColor: "#3a3a3a",
        }
    })), { alignSelf: "center", zIndex: 999 }),
    defaultActionTipTextStyle: {
        fontWeight: "normal",
        fontSize: 15,
        color: "#FFF"
    }
});
exports.default = styles;
