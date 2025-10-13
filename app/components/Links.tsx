import React from 'react'
import LinkButton from './LinkButton'

const Links = () => {
    return (
        <div className="box wide">
            <center><h2>Find Hallowed Crossing</h2></center>
            <div className="row">
                <LinkButton icon={'bluesky'} url={'https://bsky.app/profile/hallowedcrossing.bsky.social'} title={'Bluesky'} />
                <LinkButton icon={'discord'} url={'https://discord.gg/JrVwzwXCaq'} title={'Discord'} />
                <LinkButton icon={'steam'} url={''} title={'Steam (Coming Soon)'} />
                <LinkButton icon={'itch'} url={'https://hallowedcrossing.itch.io/hallowed-crossing'} title={'Itch.io'} />
            </div>
        </div>
    )
}

export default Links