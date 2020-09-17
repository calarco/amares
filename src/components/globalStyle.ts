import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import bg from "./bg.jpg";

export const Device = {
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    desktop: `(min-width: 1440px)`,
};

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: local('Material Icons'),
            local('MaterialIcons-Regular');
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        user-select: none;
        vertical-align: middle;
        text-rendering: optimizeLegibility;
    }
    
    /* Rules for sizing the icon. */
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }

    /* Rules for using icons as black on a light background. */
    .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
    .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

    /* Rules for using icons as white on a dark background. */
    .material-icons.md-light { color: rgba(255, 255, 255, 1); }
    .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }
    
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300;
  font-variation-settings: 'wdth' 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkKEo18E.ttf) format('truetype');
}
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-variation-settings: 'wdth' 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkP8o18E.ttf) format('truetype');
}
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 500;
  font-variation-settings: 'wdth' 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xK-dSZaM9iE8KbpRA_LJ3z8mH9BOJvgkM0o18E.ttf) format('truetype');
}

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    background: #29434900;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--secondary);
        border-radius: 4px 0 0 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-variant);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        -moz-tab-size: 4;
        tab-size: 4;
    }

    #root, html, body {
        height: 100vh;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        --shadow0: ${(props) => props.theme.shadow0};
        --primary: ${(props) => props.theme.colors.primary};
        --primary-variant: ${(props) => props.theme.colors.primaryVariant};
        --secondary: ${(props) => props.theme.colors.secondary};
        --secondary-variant: ${(props) => props.theme.colors.secondaryVariant};
        --on-secondary: ${(props) => props.theme.colors.onSecondary};
        --background: ${(props) => props.theme.colors.background};
        --on-background: ${(props) => props.theme.colors.onBackground};
        --on-background-variant: ${(props) =>
            props.theme.colors.onBackgroundVariant};
        --on-background-disabled: ${(props) =>
            props.theme.colors.onBackgroundDisabled};
        --surface: ${(props) => props.theme.colors.surface};
        --error: ${(props) => props.theme.colors.error};
        --overlay: ${(props) => props.theme.colors.overlay};
        --font-family: "Quicksand";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font: 300 1.2rem/2rem var(--font-family);
        color: var(--on-background);
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }

    button,
    input[type="submit"] {
        padding: 7px 16px;
        margin: 4px;
        background: none;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0);
        box-shadow: none;
        letter-spacing: 0.1px;
        letter-spacing: 0.01rem;
        font: 500 1.4rem/2rem var(--font-family);
        text-transform: uppercase;
        color: var(--secondary);
        transition: 0.1s ease-in-out;
    }

    button:hover,
    input[type="submit"]:hover {
        background-color: var(--on-background-disabled);
        cursor: pointer;
    }

    button:focus,
    input[type="submit"]:focus {
        outline: none;
    }

    button:disabled,
    input[type="submit"]:disabled {
        cursor: default;
        background: none;
        color: var(--on-background-disabled);
    }

    select:hover {
        cursor: pointer;
    }

    input[type="search"],
    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="tel"],
    input[type="date"],
    input[type="time"],
    input[type="password"],
    textarea,
    select {
        width: 100%;
        padding: 12px 16px;
        outline: none;
        border: 1px solid var(--on-background-disabled);
        background: var(--on-background-disabled);
        border-radius: 4px;
        letter-spacing: 0.1px;
        letter-spacing: 0.01rem;
        font: 300 1.3rem/2rem var(--font-family);
        color: var(--on-background);
        transition: 0.1s ease-in-out;
    }

    input[type="number"] {
        text-align: right;
    }

    textarea {
        resize: none;
    }

    input[type="search"]:focus,
    input[type="text"]:focus,
    input[type="number"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus,
    input[type="date"]:focus,
    input[type="time"]:focus,
    input[type="password"]:focus,
    textarea:focus,
    select:focus {
        outline: none;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid var(--secondary);
    }

    input[type="checkbox"] {
        display:none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--on-background);
        -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
        border-width: 1px;
        border-style: solid;
        border-color: #2f2f2f;
        border-image: none;
    }

    b {
        font-weight: 500;
    }

    p {
        font: 400 1.5rem/2.8rem var(--font-family);
        margin: 0;
    }

    h2 {
        letter-spacing: 0px;
        letter-spacing: 0rem;
        font: 500 3.4rem/4rem var(--font-family);
        text-align: center;
        color: var(--secondary);
        margin: 0;
    }

    h3 {
        letter-spacing: 0.05px;
        letter-spacing: 0.005rem;
        font: 300 2.4rem/3.2rem var(--font-family);
        color: var(--secondary-variant);
        margin: 0;
    }

    label {
        letter-spacing: 0.1px;
        letter-spacing: 0.01rem;
        font: 400 1.3rem/2.4rem var(--font-family);
    }
`;

export default GlobalStyle;
