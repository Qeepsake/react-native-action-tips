"use strict";
/**
 * @author Luke Brandon Farrell
 * @description
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* NPM - Node Package Manage */
var react_1 = require("react");
var react_native_1 = require("react-native");
/* Config - Local Configuration */
var style_1 = require("./style");
var ActionTip = react_1.default.forwardRef(function (props, ref) {
    /* Refs */
    var opacityAnimation = react_1.useRef(new react_native_1.Animated.Value(0));
    var actionTipTimer = react_1.useRef(null);
    /* Props */
    var text = props.text, visible = props.visible, position = props.position, opacity = props.opacity, duration = props.duration, animationInDuration = props.animationInDuration, animationOutDuration = props.animationOutDuration, containerStyle = props.containerStyle, textStyle = props.textStyle;
    var top = position.top, bottom = position.bottom, left = position.left, right = position.right;
    /* State */
    var _a = react_1.useState(visible), isVisible = _a[0], setIsVisible = _a[1];
    var _b = react_1.useState(text), actionTipText = _b[0], setActionTipText = _b[1];
    /* Effects */
    react_1.useEffect(function () {
        return function () { return clear(); };
    }, []);
    react_1.useEffect(function () {
        if (isVisible) {
            // Clear the timer (Reset)
            clear();
            // Animate the tip to the specified opacity
            react_native_1.Animated.timing(opacityAnimation.current, {
                toValue: opacity,
                duration: animationInDuration
            }).start();
            /*
            * Reset the timer with the specified duration. The popup will hide once the
            * the timer is triggered.
            */
            if (actionTipTimer)
                actionTipTimer.current = setTimeout(function () { return hide(); }, duration);
            ;
        }
        else {
            react_native_1.Animated.timing(opacityAnimation.current, {
                toValue: 0,
                duration: animationOutDuration
            }).start();
        }
    }, [isVisible]);
    // Used to handle function reference
    react_1.useImperativeHandle(ref, function () { return ({
        show: function (message) { return show(message); },
        hide: function () { return hide(); }
    }); });
    return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: hide },
        react_1.default.createElement(react_native_1.Animated.View, { style: [
                style_1.default.defaultActionTipStyle,
                containerStyle,
                {
                    top: top,
                    bottom: bottom,
                    left: left,
                    right: right,
                    opacity: opacityAnimation.current
                }
            ] },
            react_1.default.createElement(react_native_1.Text, { style: [style_1.default.defaultActionTipTextStyle, textStyle] }, actionTipText))));
    /**
     * Method to show the popup
     *
     * @param message
     */
    function show(message) {
        setActionTipText(message);
        setIsVisible(true);
    }
    /**
     * Method to hide the popup
     */
    function hide() { setIsVisible(false); }
    /**
     * Method to clear the timer
     */
    function clear() {
        // Clear the timer if one exists
        if (actionTipTimer.current)
            clearTimeout(actionTipTimer.current);
    }
});
ActionTip.defaultProps = {
    duration: 2000,
    animationInDuration: 150,
    animationOutDuration: 700,
    opacity: 0.85,
    position: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
};
exports.default = ActionTip;
