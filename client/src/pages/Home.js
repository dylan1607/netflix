import { useEffect } from 'react'
import { useState } from 'react'
import { Featured } from '../components/Featured'
import { List } from '../components/List'
import Navbar from '../components/Navbar'
import './Home.scss'
import axios from 'axios'

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(
                    `/api/lists${type && '?type='+type}&${genre && '?genre='+genre}`
                )
                    console.log(res.data);
                // setLists(res.data);
            } catch (error) {
                console.log(error);
            }    
        }
        getRandomList();
    },[type, genre]);
    return (
        <div className="home">
            <Navbar />
            <Featured type={type}/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
