import React from 'react'
import LinkButton from './LinkButton'

const Links = () => {
    return (
        <div className="box wide">
            <center><h2>Find Hallowed Crossing</h2></center>
            <div className="row">
                <LinkButton icon={'bluesky'} url={'https://bsky.app/profile/hallowedcrossing.bsky.social'} title={'Bluesky'} />
                <LinkButton icon={'discord'} url={''} title={'Discord (Coming Soon)'} />
                <LinkButton icon={'steam'} url={''} title={'Steam (Coming Soon)'} />
                <LinkButton icon={'itch'} url={''} title={'Itch.io (Coming Soon)'} />
            </div>
        </div>
    )
}

export default Links