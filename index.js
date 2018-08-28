import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Animated,
  Text,
  Platform
} from "react-native";
import PropTypes from "prop-types";
import styles from "./style";

export default class ActionTip extends Component {
  constructor(props) {
    super(props);

    /** State */
    this.state = {
      opacityAnimation: new Animated.Value(0)
    };

    /** Bindings */
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);

    // If the component is unmounted we want to clear any timers
    if (this.timer) clearTimeout(this.timer);
  }

  render() {
    /** Styles */
    const { defaultActionTipStyle } = styles;
    const { defaultActionTipTextStyle } = defaultStyles;
    /** Props */
    const { text, actionTipStyle, actionTipTextStyle } = this.props;
    const { top, bottom, left, right } = this.props.position;
    /** State */
    const { opacityAnimation } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.hide}>
        <Animated.View
          style={[
            defaultActionTipStyle,
            actionTipStyle,
            {
              top,
              bottom,
              left,
              right,
              opacity: opacityAnimation
            }
          ]}
        >
          <Text style={[defaultActionTipTextStyle, actionTipTextStyle]}>
            {text}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  /**
   * Method to show the popup
   */
  show() {
    // Clear the timer (Reset)
    this.clear();

    // Animate the tip to the specified opacity
    Animated.timing(this.state.opacityAnimation, {
      toValue: this.props.opacity,
      duration: this.props.animationInDuration
    }).start();

    // If a onShow callback has been passed, we execute it
    if (this.props.onShow) this.props.onShow();

    /*
    * Reset the timer with the specified duration. The popup will hide once the
    * the timer is triggered.
    */
    this.timer = setTimeout(() => this.hide(), this.props.duration);
  }

  /**
   * Method to hide the popup
   */
  hide() {
    // If a onHide callback has been passed, we execute it
    if (this.props.onHide) this.props.onHide();

    // Animate the tip to 0 opacity. Out animation
    Animated.timing(this.state.opacityAnimation, {
      toValue: 0,
      duration: this.props.animationOutDuration
    }).start();
  }

  /**
   * Method to clear the timer
   */
  clear() {
    // Clear the timer if one exists
    if (this.timer) clearTimeout(this.timer);
  }
}

ActionTip.propTypes = {
  /** Configuration */
  onRef: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  duration: PropTypes.number,
  animationInDuration: PropTypes.number,
  animationOutDuration: PropTypes.number,
  opacity: PropTypes.number,
  position: PropTypes.object,
  onShow: PropTypes.func,
  onHide: PropTypes.func,

  /** Style */
  actionTipStyle: PropTypes.any,
  actionTipTextStyle: PropTypes.any
};

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
  onShow: null,
  onHide: null
};

const defaultStyles = {
  defaultActionTipTextStyle: {
    fontWeight: "normal",
    fontSize: 15,
    color: "#FFF"
  }
};
