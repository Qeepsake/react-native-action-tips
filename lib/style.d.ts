/**
 * @author Luke Brandon Farrell
 * @description
 */
declare const styles: {
    defaultActionTipStyle: {
        alignSelf: "center";
        zIndex: number;
        position: "absolute";
        padding: number;
        borderRadius: number;
        backgroundColor: string;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        paddingTop?: undefined;
        paddingBottom?: undefined;
    } | {
        alignSelf: "center";
        zIndex: number;
        position: "absolute";
        padding: number;
        paddingTop: number;
        paddingBottom: number;
        borderRadius: number;
        backgroundColor: string;
        shadowColor?: undefined;
        shadowOffset?: undefined;
        shadowOpacity?: undefined;
        shadowRadius?: undefined;
    };
    defaultActionTipTextStyle: {
        fontWeight: "normal";
        fontSize: number;
        color: string;
    };
};
export default styles;
