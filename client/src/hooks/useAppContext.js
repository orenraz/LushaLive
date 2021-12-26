import { useState } from 'react';

const useAppContext = () => {
    const [selectedHouse, setSelectedHouse] = useState({});
    const [houses, setHouses] = useState([]);

    const value = {
        selectedHouse,
        setSelectedHouse,
        houses,
        setHouses
    };

    return value;
};

export default useAppContext;
