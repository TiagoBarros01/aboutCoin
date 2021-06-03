import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
      title: String,

      colors: {
        background: String;

        title: String;
        text: String;

        green: String;

        black: String;
        white: String;
        gray: String;

        blue: String;

        red: String;
    };

  }
}
