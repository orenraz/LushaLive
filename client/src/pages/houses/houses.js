import React, { useEffect, useState, useContext } from 'react';
import Gallery from 'react-photo-gallery';
import { useHistory } from 'react-router-dom';
import AppContext from './../../context/appContext';
import {Container} from '../../styles';
import {ErrorMessage} from "../../components/errorMessage/errorMessage";

const BASE_URL = 'http://localhost:6868';

const Houses = () => {
    const history = useHistory();
    const { setSelectedHouse, houses, setHouses } = useContext(AppContext);
    const [photos, setPhotos] = useState([]);
    const [hasError, setHasError] = useState(false);

    const getHouses = () => {
        fetch(`${BASE_URL}/api/houses`)
            .then(response => response.json())
            .then(data => {setHouses(data)})
            .catch(err => { setHasError(true); });
    }

    useEffect(() => {
        getHouses();
    }, []);

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

    const gallery = (<Gallery
        photos={photos}
        onClick={onHouseClick}
        margin={10}
    />);

    return  (
        <Container >
            {hasError ? <ErrorMessage/> : gallery}
        </Container>
    );
};

export default Houses;
