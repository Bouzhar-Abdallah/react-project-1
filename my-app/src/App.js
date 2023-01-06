import React from 'react';
import { useEffect } from 'react';

const APIkey = 'APIkey=a7e05160774b596bc82317bf9e218160ded2eaccd2870e3a7e7e502adbf792e7'
const baseURL = 'https://apiv3.apifootball.com/?'
const action = '&action=get_standings&league_id=152'
const query = baseURL + APIkey + action

const club = {
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

    const getData = async () => {
        const response = await fetch(query)
        const data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className='bg-red-200 w-96'>
                <div className='h-10 flex items-center border'>
                    <span>club</span>
                    <span className='' >MJ</span>
                    <span className='w-10' >V</span>
                    <span className='w-10' >N</span>
                    <span className='w-10' >D</span>

                </div>
                <button value={club.team_key} className='flex items-center w-full'>
                    <div className='flex w-full'>

                        <img className='p-1 w-10 h-10' src={club.team_badge} alt="" />

                        <div className='h-10 w-auto pl-3 flex items-center'>
                            <h1><span>{club.overall_league_position}</span> - {club.team_name}</h1>
                        </div>
                    </div>
                    <div className='h-10  flex items-center justify-center '>
                        <h1 className='w-8'>{club.overall_league_PTS}</h1>
                    </div>
                    <div className='h-10  flex items-center justify-center '>
                        <h1 className='w-8'>{club.overall_league_payed}</h1>
                    </div>
                    <div className='h-10  flex items-center justify-center '>
                        <h1 className='w-8' >{club.overall_league_W}</h1>
                    </div>
                    <div className='h-10  flex items-center justify-center '>
                        <h1 className='w-8'>{club.overall_league_D}</h1>
                    </div>
                    <div className='h-10  flex items-center justify-center '>
                        <h1 className='w-8'>{club.overall_league_L}</h1>
                    </div>
                </button >
            </div>
        </>
    )
}

export default App;