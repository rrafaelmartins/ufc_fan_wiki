// import useAxios from "axios-hooks";
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Box.css'


function Main(){

    const history = useHistory();
    var [weightClass, setWeightClass] = useState("");
    const weightClasses = ['Flyweight', 'Bantamweight', 'Featherweight', 'Lightweight', 'Welterweight', 'Middleweight', 'Light Heavyweight', 'Heavyweight']
    
    const handleBoxClick = (selectedWeightClass) => {
        setWeightClass(selectedWeightClass);
        // Redirect to WeightClassInfo.js with the selected weight class
        history.push(`/weightClassInfo/${selectedWeightClass}`);
    };

    
    return(
        <div>

            <div className="boxes">
            {weightClasses.map((weightClass) => (
                //terei que usar o React Router para acessar WeightClassInfo.js ao clicar
                //também terei que passar o nome da WeightClass para o WeightClassInfo.js
                //pois, a partir desse nome, farei a requisição para a API mas filtrarei apenas pela weight class correta
                <Box key={weightClass} className='box' onClick="{() => handleBoxClick(weightClass)}">
                    <h1>{weightClass}</h1>


                </Box>
                
                ))}
            </div>
        </div>
    )

}

export default Main;