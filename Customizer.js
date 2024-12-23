import React, { useState } from 'react';

const Customizer = ({ options }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (option) => {
        setSelectedOptions((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="customizer">
            {options.map((option) => (
                <div key={option}>
                    <input
                        type="checkbox"
                        id={option}
                        name={option}
                        value={option}
                        onChange={() => handleOptionChange(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
            <button onClick={() => alert(`Selected options: ${selectedOptions.join(', ')}`)}>
                Customize
            </button>
        </div>
    );
};

export default Customizer;
