import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css'
const Home = () => {
    // const first12 = data.leagues.slice(0,12);
    const [leagues, setLeagues] = useState([]); //first12
    useEffect(() => {

        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0, 9)));

    }, [])
    return (
        <div className="div-position">
            {

                leagues.map(league => <Leagues league={league}></Leagues>)
            }

        </div>
    );
};

export default Home;