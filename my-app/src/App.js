import React from 'react';
import { useState } from 'react';
import LeagueFixtures from './components/LeagueFixtures';
import LeagueRanking from './components/LeagueRanking';



function App() {
    const [league, setleague] = useState([149])
    const handleLeagueSelector = (e) => {
        setleague(e.target.value)
    }
    return (
        <>
            <select defaultValue={149} onChange={handleLeagueSelector} name="league_id" id="league_id">
                <option value="149">some england</option>
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
    <div className='flex'>

            <LeagueRanking league={league} />
            <LeagueFixtures league={league}/>
    </div>
        </>
    )
}

export default App;