import React, { useEffect } from 'react';
import './WeightClassInfo.css'
import { useNavigate } from 'react-router-dom';

function findCompetitorId(comepetitorName, data) {
    // Iterate over each ranking type
    for (const ranking of data) {
        // Iterate over each competitor within the ranking type
        for (const competitorRanking of ranking.competitor_rankings) {
            // Check if the competitor name matches the given comepetitorName
            if (competitorRanking.competitor.name === comepetitorName) {
                // Return the competitor_id if found
                return competitorRanking.competitor.id;
            }
        }
    }
    // Return null if no match is found
    return null;
}

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


async function getCompetitor(competitorId){
    console.log(`competitorid: ${competitorId}`)
    try{
        const response = await fetch(`http://localhost:3001/api/getCompetitor/${competitorId}`);

        if (!response.ok){
            throw new Error(response.message);
        }

        console.log("fetched competitor")
        const data = await response.json();
        console.log("DADOS DENTRO DE GETCOMPETITOR")
        console.log(data);
        return data;

    }
    catch(error){
        console.error('Error fetching rankings:', error);
        throw error;
    }
}

function WeightClassInfo ({weightClass, competitor, setCompetitor}) {
    const navigate = useNavigate();


    const handleNameClick = async (competitorName, data) => {
      try {
          const competitorId = findCompetitorId(competitorName, data);
          if (competitorId) {
              const competitorData = await getCompetitor(competitorId);
              if (competitorData) {
                  setCompetitor(competitorData);
                  console.log("DADOS DO COMPETIDOR DEPOIS DO SET: ")
                  console.log(competitor)
                  navigate('/fighterinfo');
              } else {
                  console.error('Competitor data not found');
              }
          } else {
              console.error('Competitor ID not found');
          }
      } catch (error) {
          console.error('Error handling name click:', error);
      }
  };

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
                  <li key={subIndex} onClick={() => handleNameClick(competitorRanking.competitor.name, rankings)}>
                    {subIndex === 0 ? "C" : subIndex}. {competitorRanking.competitor.name}
                  </li>
                ))}
              </ol>
            ))}
          </div>
        </div>
      );
    
}

export default WeightClassInfo;

