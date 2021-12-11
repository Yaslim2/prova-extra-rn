import * as Font from "expo-font";
import {
  SegoeUI,
  SegoeUIBold,
  SegoeUIBoldItalic,
  SegoeUIItalic,
} from "@shared/themes/index";

const fetchFonts = () => {
  return Font.loadAsync({
    [SegoeUIBoldItalic]: require("../../../assets/Fonts/Segoe-UI-Bold-Italic.ttf"),
    [SegoeUIBold]: require("../../../assets/Fonts/Segoe-UI-Bold.ttf"),
    [SegoeUIItalic]: require("../../../assets/Fonts/Segoe-UI-Italic.ttf"),
    [SegoeUI]: require("../../../assets/Fonts/Segoe-UI.ttf"),
  });
};

export default fetchFonts;
