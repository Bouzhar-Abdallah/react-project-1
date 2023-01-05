import React from 'react';
import { useEffect, useState } from 'react';

function Activities() {

    async function loadActivity() {
        fetch('http://www.boredapi.com/api/activity/')
            .then(Response => Response.json())
            .then(data => setActivity(data.activity));

    }

    const [activity, setActivity] = useState();
    useEffect(() => {
        loadActivity()
    },[]);

    return (
        <div>
            <h1>{activity}</h1>
            <button>Load Another</button>
        </div>
    );

}

export default Activities;