import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RealTimeTracking = () => {
    const [currencyValue, setCurrencyValue] = useState(0);
    const [currency, setCurrency] = useState('USD');
    
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
            .then((response) => {
                setCurrencyValue(response.data.bitcoin[currency]);
            })
            .catch((error) => console.error(error));
    }, [currency]);

    return (
        <div className="real-time-tracking">
            <h1>Real-Time Tracking</h1>
            <div className="currency-select">
                <label>Select Currency:</label>
                <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                </select>
            </div>
            <div className="currency-value">
                <h2>Bitcoin Value in {currency.toUpperCase()}: {currencyValue}</h2>
            </div>
        </div>
    );
}

export default RealTimeTracking;
