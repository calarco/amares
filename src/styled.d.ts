// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        shadow0: string;

        colors: {
            primary: string;
            primaryVariant: string;
            secondary: string;
            secondaryVariant: string;
            onSecondary: string;
            background: string;
            onBackground: string;
            onBackgroundVariant: string;
            onBackgroundDisabled: string;
            surface: string;
            error: string;
            overlay: string;
        };
    }
}
