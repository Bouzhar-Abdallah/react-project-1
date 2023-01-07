import React from 'react';
import { useEffect, useState } from 'react';
import ClubRank from './components/ClubRank';




function App() {
    
    const [clubs,setClubs] = useState([])
    const [league,setleague] = useState([134])
    
    const getData = async (league_id) => {

        //const league_id = 239
        const baseURL = 'https://apiv3.apifootball.com/?APIkey=a7e05160774b596bc82317bf9e218160ded2eaccd2870e3a7e7e502adbf792e7'
        const action = `&action=get_standings&league_id=${league_id}`
        const query = baseURL + action

        const response = await fetch(query)
        const data = await response.json()
        setClubs(data);
        console.log(data)
        
    }

    const handleLeagueSelector = (e) =>{
        setleague(e.target.value)
    } 

    useEffect(() => {
        getData(league)
    }, [league])
    return (
        <>
        <select onChange={handleLeagueSelector} name="league_id" id="league_id">
        <option value="152">england</option>
                    <option value="302">spain</option>
                    <option value="207">italy</option>
                    <option value="175">germany</option>
                    <option value="168">france</option>
                    <option value="239">maroc</option>
                    <option value="34">algerie</option>
                    <option value="300">cope del ray</option>
                    <option value="411">coupe du trone</option>
                    <option value="63">Super League</option>
            
        </select>
            <div className='w-96'>
                <div className='h-10 flex items-center justify-between divide-x'>
                    <span className='w-1/2 text-center'>Club</span>
                    <div className='flex divide-x'>
                        <h1 className='w-8 text-center' >Pts</h1>
                        <h1 className='w-8 text-center' >MJ</h1>
                        <h1 className='w-8 text-center' >V</h1>
                        <h1 className='w-8 text-center' >N</h1>
                        <h1 className='w-8 text-center' >D</h1>
                    </div>

                </div>
                {
                    clubs.map((club)=>(

                        <ClubRank club={club}/>
                    ))
                }
                
            </div>
        </>
    )
}

export default App;