// @ts-ignore
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const params = useParams();
  const [coin, setCoin] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/${params.id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => error);
  }, []);

  // @ts-ignore
  return (
    <div>
      {/*// @ts-ignore*/}
      {coin.name} ({coin.symbol}) {coin.price}
    </div>
  );
};

export default CoinPage;
