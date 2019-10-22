/**
 * @author Luke Brandon Farrell
 * @description
 */
import React from "react";
declare type HideFunction = () => void;
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
declare const ActionTip: React.ForwardRefExoticComponent<IProps & React.RefAttributes<unknown>>;
export default ActionTip;
