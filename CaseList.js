import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CaseList = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const fetchCases = async () => {
            const { data } = await axios.get('/api/cases');
            setCases(data);
        };

        fetchCases();
    }, []);

    return (
        <div className="case-list">
            {cases.map((item) => (
                <div key={item._id} className="case-item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default CaseList;
