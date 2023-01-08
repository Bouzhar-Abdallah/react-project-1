import React from "react";



function LeagueFixtures({league}) {

    async function getFixtures (league){

    const baseURL = 'https://apiv3.apifootball.com/?APIkey=a7e05160774b596bc82317bf9e218160ded2eaccd2870e3a7e7e502adbf792e7'
    const action = `&action=get_events&from=2023-01-8&to=2023-01-30&league_id=${league}`
    const query = baseURL + action
    const response = await fetch(query)
    const data = await response.json()
        console.log(data)
    }
    getFixtures(league)
    return(
        <h1>{league}</h1>
    )
}

export default LeagueFixtures;