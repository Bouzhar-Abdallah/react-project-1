import React from "react";

const ClubRank = ({club}) => {

    return (
        <button value={club.team_id} className='flex items-center w-full'>
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
        
    )
}

export default ClubRank;