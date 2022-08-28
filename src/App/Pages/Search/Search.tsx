// @ts-ignore
import React, { useEffect, useState } from "react";

import CoinCard from "@components/CoinCard/CoinCard";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

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
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search cryptocurrency"
          />
        </form>
        <Link to={"/"}>Cancel</Link>
      </div>
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

export default Search;
