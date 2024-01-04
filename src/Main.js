// import useAxios from "axios-hooks";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import './Box.css'


function Main(){
    const weightClasses = ['Flyweight', 'Bantamweight', 'Featherweight', 'Lightweight', 'Welterweight', 'Middleweight', 'Light Heavyweight', 'Heavyweight']
    return(
        <div>
            <div className="boxes">
            {weightClasses.map((weightClass) => (
                <Box key={weightClass} className='box'>
                    <h1>{weightClass}</h1>

                </Box>
                
                ))}
            </div>
        </div>
    )

}

export default Main;