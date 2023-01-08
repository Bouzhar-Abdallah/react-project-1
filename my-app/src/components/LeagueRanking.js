import React from "react";
import { useEffect, useState } from 'react';
import ClubRank from './ClubRank';
const LeagueRanking = ({league}) => {

    const [clubs,setClubs] = useState([])
    
    
    const getData = async (league_id) => {

        //const league_id = 239
        const baseURL = 'https://apiv3.apifootball.com/?APIkey=a7e05160774b596bc82317bf9e218160ded2eaccd2870e3a7e7e502adbf792e7'
        const action = `&action=get_standings&league_id=${league_id}`
        const query = baseURL + action

        const response = await fetch(query)
        const data = await response.json()
        setClubs(data);

        
    }

    

    useEffect(() => {
        getData(league)
    }, [league])
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

                        <ClubRank key={club.team_id} club={club}/>
                    ))
                }
                
            </div>
        </>
    )
}

export default LeagueRanking;