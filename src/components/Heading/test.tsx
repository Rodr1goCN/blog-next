import { render, screen } from '@testing-library/react';
import { Heading } from '.';
import { theme } from '../../style/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
    it('Should render a heading', () => {
        render(
            <ThemeProvider theme={theme}>
                <Heading>ola</Heading>
            </ThemeProvider>,
        );
    });
});
