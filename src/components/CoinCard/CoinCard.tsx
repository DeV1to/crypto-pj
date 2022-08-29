// @ts-ignore
import React from "react";
import "./CoinCard.css";

const CoinCard = ({ name, price, symbol, image, priceChange, category }) => {
  return (
    <div className="coin-card">
      <div className={"wrapper"}>
        <div className="coin">
          <img src={image} alt="crypto" />
          <div className={"coin-naming"}>
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </div>
        <div className="coin-data">
          <div className={"coin-pricing"}>
            <p className="coin-price">${price}</p>
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
