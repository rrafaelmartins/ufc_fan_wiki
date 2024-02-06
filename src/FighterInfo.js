// FighterInfo.jsx

import React from 'react';
import './FighterInfo.css';

function FighterInfo({ competitorData }) {
    const { competitor, info, record } = competitorData;

    const renderCompetitorPersonalInfo = () => {
        return (
            <div id="competitor-personal-info">
                <h2>Personal Information</h2>
                <ul>
                    {Object.entries(info).map(([key, value], index) => (
                        <li key={index}>
                            <span className="info-key">{key.replace(/_/g, ' ')}</span>: <span className="info-value">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderCompetitorRecord = () => {
        return (
            <div id="competitor-record">
                <h2>Fight Record</h2>
                <ul>
                    {Object.entries(record).map(([key, value], index) => (
                        <li key={index}>
                            <span className="record-key">{key.replace(/_/g, ' ').charAt(0).toUpperCase() + key.replace(/_/g, ' ').slice(1)}</span>: <span className="record-value">{value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="fighter-info-container">
            <h1 id="competitor-name">{competitor.name}</h1>
            {renderCompetitorPersonalInfo()}
            {renderCompetitorRecord()}
        </div>
    );
}

export default FighterInfo;
