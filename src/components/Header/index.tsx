import Link from 'next/link';
import { Container } from './styled';
import { SITE_NAME } from '@/src/config/app-config';

export const Header = () => {
    return (
        <Container>
            <Link href={'/'}>{SITE_NAME}</Link>
        </Container>
    );
};
