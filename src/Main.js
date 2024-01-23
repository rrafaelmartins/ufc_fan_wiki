import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import './Box.css';

function Main({ weightClass, setWeightClass }) {
    const navigate = useNavigate();
    const weightClasses = ['Flyweight', 'Bantamweight', 'Featherweight', 'Lightweight', 'Welterweight', 'Middleweight', 'Light-Heavyweight', 'Heavyweight'];

    const handleBoxClick = (selectedWeightClass) => {
        setWeightClass(selectedWeightClass);
        navigate('/weightclass');
    };

    useEffect(() => {
        // Lógica adicional que você pode querer executar após a montagem do componente
        console.log('Componente montado!');
    }, []); // O segundo argumento vazio indica que este efeito deve ser executado apenas uma vez, após a montagem do componente

    return (
        <div>
            <div className="boxes">
                {weightClasses.map((weightClass) => (
                    <Box
                        key={weightClass}
                        className='box'
                        sx={{
                            backgroundImage: `url('.src/assets/${weightClass.toLowerCase()}-background.jpg')`
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
