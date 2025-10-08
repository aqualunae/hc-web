import React, { useEffect, useState } from 'react'
import type { Devlog } from '~/types/Devlog'
import DevLog from './DevLog'

const DevLogsWindow = (props: { logs: Devlog[] }) => {

    const [ page, setPage ] = useState(0);
    const [ logs, setLogs ] = useState<Devlog[]>([]);
    const [ display, setDisplay ] = useState(false);

    useEffect(() => {
        const logsOnPage = props.logs.filter((item, index) => {
            return index >= page * 10 && index < page * 10 + 10;
        });
        console.log(props);
        setLogs(logsOnPage);
    }, [ props, page ])

    const toggleMore = () => {
        setDisplay(!display);
    }

    const switchPage = (direction: number) => {
        setPage(page + direction);
    }

    return (
        <div className="box wide" style={{ display: "flex", alignItems: "center", flexFlow: "column nowrap" }}>
            <h2 style={{ alignSelf: "flex-start" }}>Devlogs</h2>
            { display ? logs.map(log => <DevLog log={ log } key={ log.date } />) : logs[0] ? <DevLog log={ logs[0] } /> : <p>Loading...</p> }
            <div className="row wide">
                { display ? <div className="button" onClick={ () => switchPage(1) }>Older</div> : "" }
                <div className="button" onClick={ toggleMore } >Show { display ? "Less" : "More" }</div>
                { display && page > 0 ? <div className="button" onClick={ () => switchPage(-1) }>Newer</div> : "" }
            </div>
        </div>
    )
}

export default DevLogsWindow