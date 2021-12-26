import React from 'react';
import {Container} from '../../styles';
import * as S from '../../components/menu/styles';
import IconReact from '../../assets/react.svg';

const Characters = () => {
    return (
        <Container >
            <S.Icon>
                <S.Image src={IconReact} alt='IconReact' />
            </S.Icon>
        </Container>
    );
}

export default Characters;
