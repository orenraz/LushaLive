import React, {useRef} from 'react';
import useTyped from 'use-typed';
import {Container} from '../../styles';
import { FloatingText, FlexContainer, ColoredText, IntroText, FloatingAvatar } from './styles';
import ParticlesContainer from '../../components/particles';
import {lushaText} from './constants';

const Home = () => {
    const typedRef = useRef(null);
    useTyped(typedRef, {
        strings: lushaText,
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        backDelay: 1500,
        smartBackspace: true,
    });

    return (
        <>
            <Container>
                <FlexContainer>
                    <ParticlesContainer/>
                    <FloatingText>
                        Greeting and Salutations
                    </FloatingText>
                    <FloatingAvatar>
                        <img src='/avatar.jpg' alt='Lusha Avatar'/>
                    </FloatingAvatar>
                    <IntroText>
                        <h1>
                            Hello, I&apos;m
                            <ColoredText> Lusha </ColoredText>
                        </h1>
                        <div className='typed-container'>
                            <span className='typed' ref={typedRef}/>
                        </div>
                    </IntroText>
                </FlexContainer>
            </Container>
        </>
    );
}

export default Home;
