import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#18192F',
    accent: '#4A5BEA',
    text: '#1F2234',
    disabled: '#CACAD8'
  },
};

export default theme;