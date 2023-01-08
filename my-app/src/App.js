import React from 'react';
import { useState } from 'react';
import LeagueRanking from './components/LeagueRanking';



function App() {
    const [league, setleague] = useState([152])
    const handleLeagueSelector = (e) => {
        setleague(e.target.value)
    }
    return (
        <>
            <select defaultValue={152} onChange={handleLeagueSelector} name="league_id" id="league_id">
                <option value="152">england</option>
                <option value="302">spain</option>
                <option value="207">italy</option>
                <option value="175">germany</option>
                <option value="168">france</option>
                <option value="239">maroc</option>
                <option value="34 ">algerie</option>
                <option value="300">cope del ray</option>
                <option value="411">coupe du trone</option>
                <option value="63 ">Super League</option>
            </select>
            {
    }
            <LeagueRanking league={league} />
        </>
    )
}

export default App;