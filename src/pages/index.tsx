import Head from 'next/head';
import {
    Container,
    Main,
    Title,
    Description,
    CodeTag,
} from '@/src/style/sharedstyles';
import Cards from '@/src/style/cards';

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Title>
                    Welcome to <a href="https://nextjs.org">Olá Mundo!</a>
                </Title>

                <Description>
                    Get started by editing
                    <CodeTag>pages/index.tsx</CodeTag>
                </Description>

                <Cards />
            </Main>
        </Container>
    );
}
