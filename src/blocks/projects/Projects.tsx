/*
    - Аниме сайт Java Spring, React TS, TailwindCSS
    - Шахматы онлайн C++
    - Парсер вакансий NodeJS+React
    - Тестовое лэндинг
    - Облачное хранилище Java+React
 */
import Anime from "./Anime.tsx";

const Projects = () => {
    return (
        <section className={'h-screen mt-10' }>
            <h2 className={'text-2xl text-left'}>
                Реализованные проекты
            </h2>
            <Anime/>
        </section>
    );
};

export default Projects;