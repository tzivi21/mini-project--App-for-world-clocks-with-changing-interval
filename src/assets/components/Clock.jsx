import React, { useState, useEffect } from 'react'

function Clock(props) {
    let timeZone = props.timeZone;
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone }));
    const [UpdateInterval, setUpdateInterval] = useState(props.interval);


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
        }, UpdateInterval * 1000)

        return () => clearInterval(interval);
    }, [time, props.interval, UpdateInterval]);

    useEffect(() => {
        setUpdateInterval(props.interval);
    }, [props.interval]);
    function handleReset() {
        setUpdateInterval(1);
    }
    function handleDouble() {
        setUpdateInterval((prev) => prev * 2);
    }
    function handleUpdate() {
        setTime(new Date().toLocaleTimeString('en-US', { timeZone }));
    }
    function handleDelete() {
        let updatedWatches = props.watches.filter((w) => w.cityName != props.cityName)
        props.setWatches(updatedWatches);
    }
    return (
        <>
            <div>

                <h2>Current {props.cityName} Time:</h2>
                <p>{time}</p>
                <button onClick={handleReset}>Reset My Interval</button>
                <button onClick={handleDouble}>Double My Interval</button>
                <button onClick={handleUpdate}>Update Me Now</button>
                <button onClick={handleDelete}>Delete This Watch</button>
            </div>
        </>
    );
}

export default Clock
