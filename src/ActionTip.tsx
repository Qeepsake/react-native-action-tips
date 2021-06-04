/**
 * @author Luke Brandon Farrell
 * @description
 */

/* NPM - Node Package Manage */
import React, { useEffect, useRef, useState, useImperativeHandle } from "react";
import { TouchableWithoutFeedback, Animated, Text } from "react-native";
/* Config - Local Configuration */
import styles from "./style";

type HideFunction = () => void;

interface AbsolutePosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface IProps {
  text?: string;
  visible?: boolean;
  position: AbsolutePosition;
  opacity: number;
  duration: number;
  animationInDuration: number;
  animationOutDuration: number;
  containerStyle?: object;
  textStyle?: object;
  onHide?: HideFunction;
}

const ActionTip = React.forwardRef((props: IProps, ref) => {
  /* Refs */
  const opacityAnimation = useRef(new Animated.Value(0));
  const actionTipTimer = useRef<number | null>(null);
  /* Props */
  const {
    text,
    visible,
    position,
    opacity,
    duration,
    animationInDuration,
    animationOutDuration,
    containerStyle,
    textStyle,
    onHide
  } = props;
  const { top, bottom, left, right } = position;
  /* State */
  const [isVisible, setIsVisible] = useState(visible);
  const [actionTipText, setActionTipText] = useState(text);
  /* Effects */
  // Manages the action tip visibility
  useEffect(() => {
    if (isVisible) {
      // Animate the tip to the specified opacity
      Animated.timing(opacityAnimation.current, {
        toValue: opacity,
        duration: animationInDuration
      }).start();

      /*
       * Reset the timer with the specified duration. The popup will hide once the
       * the timer is triggered.
       */
      if (actionTipTimer)
        actionTipTimer.current = setTimeout(() => hide(), duration);
    } else {
      Animated.timing(opacityAnimation.current, {
        toValue: 0,
        duration: animationOutDuration
      }).start();
    }

    return () => clear();
  }, [isVisible]);
  // Allows declarative usage of action tip using props
  useEffect(() => setIsVisible(visible), [visible]);
  // Used to handle function reference
  useImperativeHandle(ref, () => ({
    show: (message: string) => show(message),
    hide: () => hide()
  }));

  return (
    <TouchableWithoutFeedback onPress={hide}>
      <Animated.View
        style={[
          styles.defaultActionTipStyle,
          containerStyle,
          {
            top,
            bottom,
            left,
            right,
            opacity: opacityAnimation.current
          }
        ]}
      >
        <Text style={[styles.defaultActionTipTextStyle, textStyle]}>
          {actionTipText}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );

  /**
   * Method to show the popup
   *
   * @param message
   */
  function show(message: string) {
    setActionTipText(message);
    setIsVisible(true);
  }

  /**
   * Method to hide the popup
   */
  function hide() {
    if (onHide) onHide();
    setIsVisible(false);
  }

  /**
   * Method to clear the timer
   */
  function clear() {
    // Clear the timer if one exists
    if (actionTipTimer.current) clearTimeout(actionTipTimer.current);
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
  }
};

export default ActionTip;
