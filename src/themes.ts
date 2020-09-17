import { DefaultTheme } from "styled-components";

const themeLight: DefaultTheme = {
    shadow0: "0 4px 5px rgba(0, 0, 0, 0.07), 0 32px 40px rgba(0, 0, 0, 0.035)",

    colors: {
        primary: "#294349",
        primaryVariant: "#80a99f",
        secondary: "#c6aa8b",
        secondaryVariant: "#e4d8c6",
        onSecondary: "rgba(255, 255, 255, 0.87)",
        background: "#efefef",
        onBackground: "rgba(0, 0, 0, 0.87)",
        onBackgroundVariant: "rgba(0, 0, 0, 0.6)",
        onBackgroundDisabled: "rgba(0, 0, 0, 0.038)",
        surface: " #d7d7d7",
        error: "#c51162",
        overlay: "rgba(18, 18, 18, 0.8)",
    },
};

const themeDark: DefaultTheme = {
    shadow0:
        "0 0.5px 0.7px rgba(0, 0, 0, 0.3), 0 1.6px 2.5px rgba(0, 0, 0, 0.179), 0 7px 11px rgba(0, 0, 0, 0.121)",

    colors: {
        primary: "#294349",
        primaryVariant: "#80a99f",
        secondary: "#c6aa8b",
        secondaryVariant: "#e4d8c6",
        onSecondary: "rgba(0, 0, 0, 0.87)",
        background: "#121212",
        onBackground: "rgba(255, 255, 255, 0.87)",
        onBackgroundVariant: "rgba(255, 255, 255, 0.6)",
        onBackgroundDisabled: "rgba(255, 255, 255, 0.038)",
        surface: "#1E1E1E",
        error: "#cf6679",
        overlay: "rgba(18, 18, 18, 0.8)",
    },
};

export { themeDark, themeLight };
