/*
    - Парсер вакансий NodeJS+React
    - Облачное хранилище Java+React
    - Тестовое лэндинг
*/

import Anime from "./Anime.tsx";
import {ReactNode} from "react";
import Chess from "./Chess.tsx";
import SpaceX from "./SpaceX.tsx";

const Projects = () => {
    return (
        <section className={'mt-10'}>
            {/*<AwesomeTitle/>*/}
            <SimpleTitle/>
            <div className={'divide-y dark:divide-divideDark divide-divideLight'}>
                <Anime/>
                <SpaceX/>
                <Chess/>
            </div>
        </section>
    );
};

export const ProjectArticle = ({children}: {children: ReactNode[]}) => (
    <article className={'flex flex-col gap-y-5 py-5'}>
        {children}
    </article>
)
export const ProjectHeader = ({children}: {children: ReactNode}) => (
    <h3 className={'text-3xl font-medium'}>
        {children}
    </h3>
)

export const FeatureList = ({children}: {children: ReactNode[]}) => (
    <ul className={'list-inside list-disc'}>
        {children}
    </ul>
)
export const TechnologyList = ({children}: {children: ReactNode[]}) => (
    <div className={'flex whitespace-nowrap flex-wrap gap-x-2 gap-y-1'}>
        {children}
    </div>
)
export const ProjectDescription = ({children}: {children: ReactNode[]}) => (
    <div className={'px-3'}>
        {children}
    </div>
)

// const AwesomeTitle = () => (
//     <div className={'relative h-[40px]'}>
//         {/*<span className={'absolute top-0 left-0 z-0'}>*/}
//         {/*    <img src={awesomeBg} alt={''} className={'w-[280px] h-[40px]'}/>*/}
//         {/*</span>*/}
//         <h2 className={'absolute top-0 left-0 text-2xl text-left pl-1 z-10 text-black'}>
//             Реализованные проекты
//         </h2>
//     </div>
// )

const SimpleTitle = () => (
    <h2 className={'text-2xl text-left pl-1 z-10'}>
        Реализованные проекты
    </h2>
)


export default Projects;