"use strict";
/**
 * @author Luke Brandon Farrell
 * @description
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    defaultActionTipStyle: Object.assign(Object.assign({}, react_native_1.Platform.select({
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
