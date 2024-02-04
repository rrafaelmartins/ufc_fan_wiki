import React, { useEffect } from 'react';

async function getRankings() {
    try {
        console.log("Tried")
        const response = await fetch('http://localhost:3001/api/getRankings');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("fetched")
        const data = await response.json();
        console.log(data);
        return data.rankings; //rankings array
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
    
    if (weightClass === "Light-Heavyweight"){
        weightClass = "light_heavyweight"
    }
    const filteredRanking = rankings.filter(ranking => ranking.name === weightClass.toLowerCase()) //ranking is the current element, and everyting after the arrow is the condition of return

    
    return (
        <div>
          <h1>{weightClass === "light_heavyweight" ? "Light-Heavyweight" : weightClass}</h1>
          <div id="ranking-list">
            {filteredRanking.map((ranking, index) => ( //ranking represents the current element being processed, and index is its index in the array.
              <ol key={index}>
                {ranking.competitor_rankings.map((competitorRanking, subIndex) => ( 
                  <li key={subIndex}>
                    {competitorRanking.competitor.name}
                  </li>
                ))}
              </ol>
            ))}
          </div>
        </div>
      );
    
}

export default WeightClassInfo;

