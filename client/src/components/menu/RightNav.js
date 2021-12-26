import * as S from './styles';
import Logo from '../../assets/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Houses from '../../pages/houses/houses';
import House from '../../pages/house/house';
import Home from '../../pages/home/home';
import Characters from '../../pages/characters/characters';

function RightNav(props) {
  return (
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo} />
        <NavLink
            to='/home'
            activeStyle={{
                fontWeight: 'bold',
                color: '#0DADEA',
            }}
        >
            <S.Li>Home</S.Li>
        </NavLink>
        <NavLink
          to='/houses'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Houses</S.Li>
        </NavLink>
        <NavLink
          to='/characters'
          activeStyle={{
            fontWeight: 'bold',
            color: '#0DADEA',
          }}
        >
          <S.Li>Characters</S.Li>
        </NavLink>
      </S.Ul>

      <Switch>
         <Route exact path='/home'>
             <Home/>
         </Route>
        <Route exact path='/houses'>
          <Houses/>
        </Route>
         <Route exact path='/house'>
             <House/>
         </Route>
        <Route exact path='/characters'>
            <Characters/>
        </Route>

        <Redirect to='/home' />
      </Switch>
    </Router>
  );
}

export default RightNav;
