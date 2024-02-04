import React, { useEffect } from 'react';
const api_key = process.env.REACT_APP_API_KEY;

async function getRankings() {
    try {
        console.log("Tried")
        const response = await fetch('http://localhost:3001/api/getRankings');

        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("fetched")
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching rankings:', error);
        throw error;
    }
}

function WeightClassInfo ({weightClass}) {
    const [rankings, setRankings] = React.useState([]);
    useEffect(() => {
        getRankings().then((data) => {
            setRankings(data);
        });
    }, []);  // O segundo argumento vazio indica que este efeito deve ser executado apenas uma vez, após a montagem do componente

    return(
        <div>
            <h1>{weightClass}</h1>
            <div id="ranking-list">
                <ol>
                    <li>Rank: </li>
                    <li>Name: </li>
                </ol>
            </div>
        </div>
    );
}

export default WeightClassInfo;

