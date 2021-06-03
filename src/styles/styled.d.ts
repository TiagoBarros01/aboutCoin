import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
      title: string,

      colors: {
        background: string;

        title: string;
        text: string;

        green: string;

        black: string;
        white: string;
        gray: string;

        blue: string;

        red: string;
    };

  }
}
