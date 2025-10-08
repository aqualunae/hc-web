import React, { useEffect, useState } from 'react'
import type { Route } from "./+types/main";
import axios from 'axios';
import Carousel from '~/components/Carousel';
import type { Devlog } from '~/types/Devlog';
import type { Image } from '~/types/image';
import Links from '~/components/Links';
import Summary from '~/components/Summary';
import DevLogsWindow from '~/components/DevLogsWindow';

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const logs = await axios.get(`/data/logs.json`);
    const images = await axios.get(`/data/images.json`);
    return { logs, images };
}

export function HydrateFallback() {
   return <div>Loading...</div>;
}

const Main = () => {

    const [ logs, setLogs ] = useState<Devlog[]>([]);
    const [ images, setImages ] = useState<Image[]>([]);

    useEffect(() => {
        (async() => {
            try {
                const logsData = await axios.get(`/data/logs.json`);
                setLogs(logsData.data.reverse());
                const imageData = await axios.get(`/data/images.json`);
                setImages(imageData.data);
            } catch(err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <>
            <Carousel images={ images } />
            <div className="row wide">
                <div className="col half-wide">
                    <Links />
                    <DevLogsWindow logs={ logs } />
                </div>
                <div className="col half-wide">
                    <Summary />
                </div>
            </div>
        </>
    )
}

export default Main