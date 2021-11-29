import React from 'react';

const Card = (props) => {
    const {country} = props;


    return (
        <li className="card">
            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                </ul>
            </div>
        </li>
    );
};
export default Card;