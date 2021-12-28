import React, { useEffect, useState, useContext } from 'react';
import Gallery from 'react-photo-gallery';
import { useHistory } from 'react-router-dom';
import AppContext from './../../context/appContext';
import {Container} from '../../styles';

const BASE_URL = 'http://localhost:6868';

const Houses = () => {
    const history = useHistory();
    const { setSelectedHouse, houses, setHouses } = useContext(AppContext);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const getHouses = () => {
            fetch(`${BASE_URL}/api/houses`)
                .then(response => response.json())
                .then(data => {setHouses(data)});
        }
        getHouses();
    }, [setHouses]);

    useEffect(() => {
        setPhotos(houses.map((house, index) => {
            const src = require(`./../../assets/${house.image}.jpg`).default;
            return {
                src,
                id: house.id,
                width: 1000,
                height: 500,
                className:'houseImg'
            }
        }));
    }, [houses]);

    const onHouseClick = e => {
        const house = houses.find(house => house.id === e.target.id);
        setSelectedHouse(house);
        history.push('/house');
    }

    return  (
        <Container >
            <Gallery
                photos={photos}
                onClick={onHouseClick}
                margin={10}
            />
        </Container>
    );
};

export default Houses;
