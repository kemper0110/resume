import {useEffect, useRef, useState} from "react";

export type Resource = {
    title: string
    link: string
    imageUrl: string
}

const Element = ({resource}: { resource: Resource }) => (
    <div
        tw="carousel-item text-center relative w-64 h-40 snap-start"
    >
        <a href={resource.link}
            tw="h-full w-full aspect-video overflow-hidden block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
            // style={{backgroundImage: `url(${resource.imageUrl || ''})`}}
        >
            <img
                src={resource.imageUrl || ''}
                alt={resource.title}
                tw="w-full aspect-auto"
            />
        </a>
        <a
            href={resource.link}
            tw="h-full w-full aspect-video block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
        >
            <h3 tw="text-white py-6 px-3 mx-auto text-xl">
                {resource.title}
            </h3>
        </a>
    </div>
)

const Carousel = ({data}: {data: Resource[]}) => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef<HTMLDivElement | null>(null);

    const movePrev = () => {
        if (currentIndex > 0)
            setCurrentIndex((prevState) => prevState - 1);
    };
    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction: "prev" | "next") => {
        if (direction === 'prev')
            return currentIndex <= 0
        if (direction === 'next' && carousel.current !== null)
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        return false;
    };

    useEffect(() => {
        if (carousel.current !== null)
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current ?
            carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div tw="carousel mx-auto">
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
                    tw="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {
                        data.map((e, i) => <Element key={i} resource={e}/>)
                    }
                </div>
            </div>
        </div>
    );
};

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

export default Carousel;