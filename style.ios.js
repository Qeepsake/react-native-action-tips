import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  defaultActionTipStyle: {
    position: "absolute",
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "black",
    shadowColor: "#303030",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    zIndex: 999
  }
});

export default styles;
