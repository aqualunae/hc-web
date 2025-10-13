import React, { useEffect, useState } from 'react'
import type { Image } from '~/types/Image'

const Carousel = ({ inImages }: { inImages: Image[] }) => {

    const [ left, setLeft ] = useState(2);
    const [ center, setCenter ] = useState(0);
    const [ right, setRight ] = useState(1);
    const [ max, setMax ] = useState(2);
    const [ images, setImages ] = useState<Image[]>([]);

    useEffect(() => {
        const sortedImages = inImages?.filter(image => image.id > -1).sort((a, b) => a.id - b.id);
        setImages(sortedImages);
        setMax(sortedImages.length - 1);
        setLeft(sortedImages.length - 1);
    }, [ inImages ])

    const clickLeft = () => {
        let nextLeft = left - 1;
        if (nextLeft < 0) { nextLeft = max }
        setLeft(nextLeft);

        let nextCenter = center - 1;
        if (nextCenter < 0) { nextCenter = max }
        setCenter(nextCenter);

        let nextRight = right - 1;
        if (nextRight < 0) { nextRight = max }
        setRight(nextRight);
    }

    const clickRight = () => {
        let nextLeft = left + 1;
        if (nextLeft > max) { nextLeft = 0 }
        setLeft(nextLeft);

        let nextCenter = center + 1;
        if (nextCenter > max) { nextCenter = 0 }
        setCenter(nextCenter);

        let nextRight = right + 1;
        if (nextRight > max) { nextRight = 0 }
        setRight(nextRight);
    }

    if (!images || images.length == 0 || left == -1) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div id="carousel-outer" className="box">
            <div id="carousel">
                <div id="carousel-left">
                    <img className="carousel-image" src={ `/img/${ images[left].filename }.png` } alt={ images[left].alt } />
                </div>
                <div id="carousel-center">
                    <img className="carousel-image" src={ `/img/${ images[center].filename }.png` } alt={ images[center].alt } />
                </div>
                <div id="carousel-right">
                    <img className="carousel-image" src={ `/img/${ images[right].filename }.png` } alt={ images[right].alt } />
                </div>
            </div>
            <div id="image-description" className="box document half-wide">
                { images[center].description }
            </div>
            <div id="carousel-nav">
                <div id="carousel-nav-left">
                    <img className="carousel-arrow" src="/assets/arrow-left.png" onClick={ clickLeft } />
                </div>
                <div id="carousel-nav-right">
                    <img className="carousel-arrow" src="/assets/arrow-left.png" onClick={ clickRight } />
                </div>
            </div>
        </div>
    )
}

export default Carousel