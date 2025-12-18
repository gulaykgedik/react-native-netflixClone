import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTg5ODhkMjFkZGNiYzY1MzJhNDg0OTYzZmRiYWM3ZSIsIm5iZiI6MTczMjEzNjY1My4zNjMwMDAyLCJzdWIiOiI2NzNlNGVjZGQ4MDg2ZTY2YjdkYTZiMDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dmcVaR_5wZkplTE_-Xgh84GAZUcbxBs6KHLTUbDuBqs"
const API_KEY = "d98988d21ddcbc6532a484963fdbac7e"

export { screenWidth, screenHeight, token, API_KEY };