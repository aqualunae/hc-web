import React from 'react'
import type { Devlog } from '~/types/Devlog';

const DevLog = (props: {log: Devlog }) => {

    let content: React.JSX.Element[] = [];
    if (props.log.content != undefined)
    {
        content = props.log.content.map(item => <li key={ item }>{ item }</li>);
    }

    let issues: React.JSX.Element[] = [];
    if (props.log.issues != undefined)
    {
        issues = props.log.issues.map(item => <li key={ item }>{ item }</li>);
    }

    let features: React.JSX.Element[] = [];
    if (props.log.features != undefined)
    {
        features = props.log.features.map(item => <li key={ item }>{ item }</li>);
    }

    return (
        <div className="box wide document">
            <h3>{ props.log.date }</h3>
            { props.log.features ? <div>
                <h4>Features Added</h4>
                <ul>
                    { features }
                </ul>
            </div> : "" }
            { props.log.content ? <div>
                <h4>Content Added</h4>
                <ul>
                    { content }
                </ul>
            </div> : "" }
            { props.log.issues ? <div>
                <h4>Issues Fixed</h4>
                <ul>
                    { issues }
                </ul>
            </div> : "" }
        </div>
    )
}

export default DevLog