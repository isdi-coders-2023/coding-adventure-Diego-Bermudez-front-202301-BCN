import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColor: string;
      mainColorContrast: string;
      warningColor: string;
      defaultColorLight: string;
    };

    fonts: {
      mainFont: string;
      titleFont: string;
      mainTitleFont: string;
    };
    fontSizes: {
      smallerFontSize: string;
      defaultFontSize: string;
      biggerFontSize: string;
      counterFontSize: string;
      titleFontSize: string;
      mainTitleSmallFontSize: string;
      mainTitleFontSize: string;
    };
  }
}
