import { theme } from '../src/style/theme';

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
