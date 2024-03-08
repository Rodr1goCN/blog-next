import { screen } from '@testing-library/react';
import { Heading } from '.';
import { customRender } from '../../utils/custom-render';

describe('<Heading />', () => {
    it('Should render a heading', () => {
        customRender(<Heading>ola</Heading>);
        const element = screen.getByRole('heading', { name: /OLA/i });
        expect(element).toHaveStyleRule('font-size', '5rem');
    });
});
