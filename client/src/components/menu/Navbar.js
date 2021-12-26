import * as S from './styles';

import Logo from '../../assets/logo.png';
import Burger from './Burger';

export default function Navbar(props) {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt='Lusha live' />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  );
}
