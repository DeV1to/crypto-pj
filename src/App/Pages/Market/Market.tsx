// @ts-ignore
import React, { useEffect, useState } from "react";

import CoinCard from "@components/CoinCard/CoinCard";
import axios from "axios";

import MultiDropdown from "./MultiDropdown/MultiDropdown";
import Subcategories from "./Subcategories/Subcategories";

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState("Choose category:");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false\n"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => error);
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="coin-app">
      <MultiDropdown
        selected={selected}
        setSelected={setSelected}
        onChange={handleChange}
      />
      <Subcategories />

      {filteredCoins.map((coin) => {
        return (
          <CoinCard
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            category={coin.category}
          />
        );
      })}
    </div>
  );
};

export default Market;
