import type {Resource} from "./Carousel.tsx";
import {ReactNode, useEffect, useRef, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';

export interface SimpleCarouselProps {
    data: Resource[]
    imageWidth: number
    imageHeight: number | string
    carouselWidth: number | string
    carouselHeight: number | string
    children: ReactNode | ReactNode[]
}

const SimpleCarousel = ({data, children, ...sizes}: SimpleCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);
    const movePrev = () => {
        if (isDisabled("prev")) return
        setCurrentIndex((prevState) => prevState - 1);
    };
    const moveNext = () => {
        if(isDisabled('next')) return
        setCurrentIndex((prevState) => prevState + 1);
    };
    const isDisabled = (direction: "prev" | "next") => {
        switch (direction) {
            case 'prev':
                return currentIndex <= 0
            case 'next':
                return currentIndex >= data.length - 1
            default:
                return false
        }
    };
    useEffect(() => {
        if (carousel.current !== null)
            carousel.current.scrollLeft = sizes.imageWidth * currentIndex;
    }, [currentIndex, sizes.imageWidth]);

    return (
        <div tw="mx-auto"
             style={{maxWidth: sizes.carouselWidth, height: sizes.carouselHeight}}
        >
            <div tw="relative overflow-hidden">
                <div tw="flex justify-between absolute top-0 left-0 w-full h-full">
                    <button
                        onClick={movePrev}
                        tw="md:hover:bg-blue-900/75 bg-blue-700/60 text-white w-10 h-full text-center opacity-90 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <PrevIcon/>
                        <span tw="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        tw="md:hover:bg-blue-900/75 bg-blue-700/60 text-white w-10 h-full text-center opacity-90 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <NextIcon/>
                        <span tw="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    tw="relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export const SimpleCarouselElement = ({resource, children, width, height}: {
    resource: Resource,
    width: number | string,
    height: number | string,
    children: ReactNode | ReactNode[]
}) => (
    <div
        tw="text-center relative snap-start"
        style={{width, height}}
    >
        <a href={resource.link}
           draggable={false}
           tw="h-full w-full aspect-video overflow-hidden block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
           style={{width, height}}
        >
            {children}
        </a>
        <a
            draggable={false}
            href={resource.link}
            tw="h-full w-full aspect-video block absolute px-5 top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
        >
            <h3 tw="text-white py-6 px-3 mx-auto text-xl">
                {resource.title}
            </h3>
        </a>
    </div>
)


const PrevIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        tw="h-12 w-20 -ml-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
        />
    </svg>
)
const NextIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        tw="h-12 w-20 -ml-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
        />
    </svg>
)


export default SimpleCarousel;