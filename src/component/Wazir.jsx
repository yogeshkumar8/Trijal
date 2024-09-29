import React, { useState } from 'react';
import './HodlInfo.css';
import pic from "./HODLINFO.png"
const data = [
  {
    platform: 'WazirX',
    lastTradedPrice: '56,50,099',
    buySellPrice: '56,15,001/56,50,099',
    difference: '3.45%',
    savings: '1,88,308',
  },
  {
    platform: 'Bitbns',
    lastTradedPrice: '50,44,982',
    buySellPrice: '50,43,000 / 50,45,000',
    difference: '-7.63%',
    savings: '4,16,808',
  },
  {
    platform: 'Colodax',
    lastTradedPrice: '53,09,938',
    buySellPrice: '52,56,839/58,40,933',
    difference: '-2.78%',
    savings: '1,51,852',
  },
  {
    platform: 'Zebpay',
    lastTradedPrice: '56,43,934',
    buySellPrice: '56,50,869 / 56,37,000',
    difference: '3.33%',
    savings: '1,82,144',
  },
  {
    platform: 'CoinDCX',
    lastTradedPrice: '56,60,000',
    buySellPrice: '56,60,000/ 57,01,814',
    difference: '3.63%',
    savings: '1,98,209',
  },
];

const Wazir = () => {
  const [bestPrice, setBestPrice] = useState('54,61,790');
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
    setBestPrice(platform.lastTradedPrice);
  };

  return (
    <div className="theme-dark">
      <div className="header">
        <img src={pic} className='fiat-logo'/>

        <button type="button" aria-haspopup="true" aria-expanded="false" class="header-button dropdown-toggle btn btn-secondary">INR</button>
        
      </div>
      <div className="best-price">
          <div className="price-text">Best Price to Trade</div>
          <div className="price">₹ {bestPrice}</div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-value">0.27%</div>
            <div className="stat-label">5 Mins</div>
          </div>
          <div className="stat">
            <div className="stat-value">0.98%</div>
            <div className="stat-label">1 Hour</div>
          </div>
          <div className="stat">
            <div className="stat-value">10.09%</div>
            <div className="stat-label">1 Day</div>
          </div>
          <div className="stat">
            <div className="stat-value">17.09%</div>
            <div className="stat-label">7 Days</div>
          </div>
        </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Platform</th>
              <th>Last Traded Price</th>
              <th>Buy / Sell Price</th>
              <th>Difference</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            {data.map((platform, index) => (
              <tr
                key={index}
                className={selectedPlatform === platform? 'elected' : ''}
                onClick={() => handlePlatformClick(platform)}
              >
                <td>{index + 1}</td>
                <td>
                  <div className="platform-icon">{platform.platform}</div>
                </td>
                <td>₹ {platform.lastTradedPrice}</td>
                <td>₹ {platform.buySellPrice}</td>
                <td>{platform.difference}</td>
                <td>
                  <div
                    className={`savings ${
                      parseFloat(platform.difference) < 0? 'negative' : 'positive'
                    }`}
                  >
                    {platform.difference < 0? '▼' : '▲'}
                    ₹ {platform.savings}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wazir;