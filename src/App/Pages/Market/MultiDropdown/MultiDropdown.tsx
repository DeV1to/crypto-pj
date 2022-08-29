// @ts-ignore
import React, { useEffect, useState } from "react";

import "./MultiDropdown.css";
import axios from "axios";

const MultiDropdown = ({ selected, setSelected, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/categories/list")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => error);
  }, []);

  return (
    <div className={"dropdown"}>
      <div className={"dropdown-btn"} onClick={() => setIsActive(!isActive)}>
        {selected}
      </div>
      {isActive && (
        <div className={"dropdown-content"}>
          {category.map((category) => (
            <div
              onClick={(e) => {
                setSelected(category.name);
                setIsActive(false);
              }}
              className={"dropdown-item"}
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
