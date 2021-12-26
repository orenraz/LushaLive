import './App.css';
import React from 'react';
import Menu from './components/menu/Navbar';
import GlobalsStyles from './globalStyles';
import { AppContext } from './context';
import useAppContext from './hooks/useAppContext';

const App = () => {
    const value  = useAppContext();

    return (
        <AppContext.Provider value={value}>
            <GlobalsStyles />
            <Menu />
        </AppContext.Provider>
    )
};

export default App;
