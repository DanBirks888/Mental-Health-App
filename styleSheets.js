import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
  },
  pad: {
    padding: 50,
  },
  title: {
    fontSize: 30,
    paddingVertical: 20,
    color: "white",
    textAlign: "center",
  },
  normalText: {
    fontSize: 20,
    paddingVertical: 20,
    color: "white",
    textAlign: "center",
  },
  loginInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "white",
  },
  input: {
    flex: 1,
    color: "white",
    marginHorizontal: 20,
  },
  confirmBtn: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});
