/*
    - Парсер вакансий NodeJS+React
    - Облачное хранилище Java+React
    - Тестовое лэндинг
*/

import Anime from "./Anime.tsx";
import Chess from "./Chess.tsx";
import SpaceX from "./SpaceX.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";

const Projects = () => {
    return (
        <section tw={'mt-10'}>
            <h2 tw={'text-2xl text-left pl-1 z-10'}>
                Реализованные проекты
            </h2>
            <div tw={'divide-y dark:divide-divideDark divide-divideLight'}>
                <Anime/>
                <SpaceX/>
                <Chess/>
            </div>
        </section>
    );
};

export const ProjectArticle = tw.article`flex flex-col gap-y-5 py-5`
export const ProjectHeader = tw.h3`text-3xl font-medium`
export const FeatureList = tw.ul`list-inside list-disc`
export const TechnologyList = tw.div`flex whitespace-nowrap flex-wrap gap-x-2 gap-y-1`
export const ProjectDescription = tw.div`px-3`
export default Projects;