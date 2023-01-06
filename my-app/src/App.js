import React from 'react';
import { useEffect, useState } from 'react';
import ClubRank from './components/ClubRank';

const league_id = 239
const APIkey = 'APIkey=a7e05160774b596bc82317bf9e218160ded2eaccd2870e3a7e7e502adbf792e7'
const baseURL = 'https://apiv3.apifootball.com/?'
const action = `&action=get_standings&league_id=${league_id}`
const query = baseURL + APIkey + action

const clubx = {
    "country_name": "England",
    "league_id": "152",
    "league_name": "Premier League",
    "team_id": "141",
    "team_name": "Arsenal",
    "overall_promotion": "Promotion - Champions League (Group Stage)",
    "overall_league_position": "1",
    "overall_league_payed": "17",
    "overall_league_W": "14",
    "overall_league_D": "2",
    "overall_league_L": "1",
    "overall_league_GF": "40",
    "overall_league_GA": "14",
    "overall_league_PTS": "44",
    "home_league_position": "2",
    "home_promotion": "",
    "home_league_payed": "8",
    "home_league_W": "7",
    "home_league_D": "1",
    "home_league_L": "0",
    "home_league_GF": "22",
    "home_league_GA": "8",
    "home_league_PTS": "22",
    "away_league_position": "1",
    "away_promotion": "",
    "away_league_payed": "9",
    "away_league_W": "7",
    "away_league_D": "1",
    "away_league_L": "1",
    "away_league_GF": "18",
    "away_league_GA": "6",
    "away_league_PTS": "22",
    "league_round": "",
    "team_badge": "https://apiv3.apifootball.com/badges/141_arsenal.jpg",
    "fk_stage_key": "6",
    "stage_name": "Current"
}

function App() {

    const [clubs,setClubs] = useState([])

    const getData = async () => {
        const response = await fetch(query)
        const data = await response.json()
        setClubs(data);
        //console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
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