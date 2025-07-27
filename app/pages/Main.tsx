import React, { useEffect, useState } from 'react'
import type { Route } from "./+types/main";
import axios from 'axios';
import Carousel from '~/components/Carousel';
import type { Devlog } from '~/types/Devlog';
import type { Image } from '~/types/image';

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
    const logs = await axios.get(`/sampledata/logs.json`);
    console.log(logs);
    const images = await axios.get(`/sampledata/images.json`);
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
                const logsData = await axios.get(`/sampledata/logs.json`);
                setLogs(logsData.data);
                const imageData = await axios.get(`/sampledata/images.json`);
                setImages(imageData.data);
            } catch(err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <>
            <Carousel images={ images } />
        </>
    )
}

export default Main