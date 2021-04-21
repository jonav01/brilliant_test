import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Rows.css";
function Rows({ id_no, title, sub, fetchURL }) {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setCard(request.data.data);

      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="Cards">
      <div className="Card_heading">
        <p>{id_no}</p>
        <div className="Card_headingContent">
          <h2>{title}</h2>
          <h5>{sub}</h5>
        </div>
      </div>
      <div className="Card_imageHolder">
        {cards.map((card) => (
          <div className="Card_image">
            <img
              key={card.id}
              src={card.avatar}
              className="card_avator"
              alt="Card Avator"
            />
            <div className="Card_imageHeading">
              <h2>{card.first_name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rows;
