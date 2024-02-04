import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import bantamweightBackground from './assets/bantamweight-background.webp';
import featherweightBackground from './assets/featherweight-background.jpeg';
import flyweightBackground from './assets/flyweight-background.jpg';
import heavyweightBackground from './assets/heavyweight-background.jpg';
import lightheavyweightBackground from './assets/light-heavyweight-background.jpg';
import lightweightBackground from './assets/lightweight-background.jpg';
import middleweightBackground from './assets/middleweight-background.jpeg';
import welterweightBackground from './assets/welterweight-background.webp';

import './Box.css';

function Main({ weightClass, setWeightClass }) {
    const navigate = useNavigate();
    const weightClasses = ['Flyweight', 'Bantamweight', 'Featherweight', 'Lightweight', 'Welterweight', 'Middleweight', 'Light-Heavyweight', 'Heavyweight'];

    const handleBoxClick = (selectedWeightClass) => {
        setWeightClass(selectedWeightClass);
        navigate('/weightclass');
    };


    
    return (
        <div>
            <div className="boxes">
                {weightClasses.map((weightClass) => (
                    <Box
                        key={weightClass}
                        className='box'
                        sx={{
                            backgroundImage: `url(${weightClass === 'Flyweight' ? flyweightBackground : weightClass === 'Bantamweight' ? bantamweightBackground : weightClass === 'Featherweight' ? featherweightBackground : weightClass === 'Lightweight' ? lightweightBackground : weightClass === 'Welterweight' ? welterweightBackground : weightClass === 'Middleweight' ? middleweightBackground : weightClass === 'Light-Heavyweight' ? lightheavyweightBackground : heavyweightBackground})`,
                            backgroundSize: 'cover', // Ou 'contain', dependendo da preferência
                        }}
                        onClick={() => handleBoxClick(weightClass)}>
                        <h1>{weightClass}</h1>
                    </Box>
                ))}
            </div>
        </div>
    );
}

export default Main;
