import React from 'react';

const houseInitialData = {
    url: "",
    name: "",
    region: "",
    coatOfArms: "",
    words: "",
    titles: [],
    seats: [],
    currentLord: "",
    image: "",
    swornMembers: [],
    id: ""
}

const defaultAppData = {
    selectedHouse: houseInitialData,
    houses: [],
    setSelectedHouse: () => {},
    setHouses: () => {},
};

const AppContext = React.createContext({ appData: defaultAppData });

export {
    AppContext as default,
    defaultAppData,
};
