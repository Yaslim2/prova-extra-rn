import * as Font from "expo-font";
import {
  SegoeUI,
  SegoeUIBold,
  SegoeUIBoldItalic,
  SegoeUIItalic,
} from "@shared/themes/index";

const fetchFonts = () => {
  return Font.loadAsync({
    [SegoeUIBoldItalic]: require("../../../assets/fonts/Segoe-UI-Bold-Italic.ttf"),
    [SegoeUIBold]: require("../../../assets/fonts/Segoe-UI-Bold.ttf"),
    [SegoeUIItalic]: require("../../../assets/fonts/Segoe-UI-Italic.ttf"),
    [SegoeUI]: require("../../../assets/fonts/Segoe-UI.ttf"),
  });
};

export default fetchFonts;
