import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
    const [currencyData, setCurrencyData] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then((response) => {
                setCurrencyData(response.data.rates);
            })
            .catch((error) => console.error(error));
    }, [fromCurrency]);

    useEffect(() => {
        if (currencyData[toCurrency]) {
            setConvertedAmount(amount * currencyData[toCurrency]);
        }
    }, [amount, fromCurrency, toCurrency, currencyData]);

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <div className="input-fields">
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    {Object.keys(currencyData).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
                <span>to</span>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    {Object.keys(currencyData).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
            <div className="result">
                <h2>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h2>
            </div>
        </div>
    );
}

export default CurrencyConverter;
