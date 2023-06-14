import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Home from "../../pages/Home/Home";
import GameList from "../../pages/GameList/GameList";
import SingleCard from "../../pages/SingleCard/SingleCard";
import Layout from "../Layout/Layout";

const App = () => {
  const [cards, setCards] = useState([]);
  const { pathname } = useLocation();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://64663477228bd07b355edea2.mockapi.io/items`
        );
        setCards(res.data);
      } catch (error) {
        alert(`Ошибка при получении данных`);
      }
    };
    getData();
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home cards={cards} />} />
          <Route path="games" element={<GameList cards={cards} />} />
          <Route path="games/:card" element={<SingleCard cards={cards} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
