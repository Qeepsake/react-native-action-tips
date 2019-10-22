"use strict";
/**
 * @author Luke Brandon Farrell
 * @description
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* NPM - Node Package Manage */
const react_1 = require("react");
const react_native_1 = require("react-native");
/* Config - Local Configuration */
const style_1 = require("./style");
const ActionTip = react_1.default.forwardRef((props, ref) => {
    /* Refs */
    const opacityAnimation = react_1.useRef(new react_native_1.Animated.Value(0));
    const actionTipTimer = react_1.useRef(null);
    /* Props */
    const { text, visible, position, opacity, duration, animationInDuration, animationOutDuration, containerStyle, textStyle } = props;
    const { top, bottom, left, right } = position;
    /* State */
    const [isVisible, setIsVisible] = react_1.useState(visible);
    const [actionTipText, setActionTipText] = react_1.useState(text);
    /* Effects */
    react_1.useEffect(() => {
        return () => clear();
    }, []);
    react_1.useEffect(() => {
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
                actionTipTimer.current = setTimeout(() => hide(), duration);
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
    react_1.useImperativeHandle(ref, () => ({
        show: (message) => show(message),
        hide: () => hide()
    }));
    return (react_1.default.createElement(react_native_1.TouchableWithoutFeedback, { onPress: hide },
        react_1.default.createElement(react_native_1.Animated.View, { style: [
                style_1.default.defaultActionTipStyle,
                containerStyle,
                {
                    top,
                    bottom,
                    left,
                    right,
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
