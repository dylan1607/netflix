import { useEffect, useState } from "react";
import { Featured } from "../components/Featured";
import { List } from "../components/List";
import Navbar from "../components/Navbar";
import "./Home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "admin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDkyYWQwOWVkYWQxMTA4OTA5N2U5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODI2MDQ3NCwiZXhwIjoxNjI4NjkyNDc0fQ.do_fK3pFZsT1tOlTcPmTV_pNC2_XCSXWNmfEVlvM-GY",
            },
          }
        );
        // console.log(res.data);
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
