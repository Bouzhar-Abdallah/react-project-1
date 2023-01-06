import React from 'react';
import { useEffect, useState } from 'react';

function Standings() {

    async function loadStandings() {
        const id = 152;
        /* fetch('https://apiv3.apifootball.com/?action=get_teams&league_id=' + id + '&APIkey=a7e05160774b596bc82317bf9e218160ded2eaccd2870e3a7e7e502adbf792e7')
            .then(Response => Response.json())
            .then(data => setActivity(data)); */
    }

    const [activity, setActivity] = useState();
    useEffect(() => {
        loadStandings()
    },[]);

    return (
        <div>
            <h1>{activity}</h1>
            <button onClick={loadStandings} >Load Another</button>
        </div>
    );

}

export default Standings;