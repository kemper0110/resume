import {Item} from "../../components/Item.tsx";
import {Resource} from "../../components/Carousel.tsx";

import main from '@/assets/anime/main.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mainThumbnail from '@/assets/anime/main.png?w=400&format=avif;webp;jpeg';

import popup from '@/assets/anime/popup.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import popupThumbnail from '@/assets/anime/popup.png?w=400&format=avif;webp;jpeg';

import detailed from '@/assets/anime/detailed.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import detailedThumbnail from '@/assets/anime/detailed.png?w=400&format=avif;webp;jpeg';

import statuslist from '@/assets/anime/statuslist.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import statuslistThumbnail from '@/assets/anime/statuslist.png?w=400&format=avif;webp;jpeg';

import form from '@/assets/anime/form.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import formThumbnail from '@/assets/anime/form.png?w=400&format=avif;webp;jpeg';

import SimpleCarousel, {SimpleCarouselElement} from "../../components/SimpleCarousel.tsx";
import SourceLink from "../../components/SourceLink.tsx";
import {FeatureList, ProjectArticle, ProjectDescription, ProjectHeader, TechnologyList} from "./Projects.tsx";

const data: Resource[] = [
    {
        title: 'Поиск видео',
        imageUrl: mainThumbnail,
        link: main
    },
    {
        title: 'Подробная информация при наведении на видео',
        imageUrl: popupThumbnail,
        link: popup
    },
    {
        title: 'Страница с подробной информацией',
        imageUrl: detailedThumbnail,
        link: detailed
    },
    {
        title: 'Ведение списка просмотра',
        imageUrl: statuslistThumbnail,
        link: statuslist
    },
    {
        title: 'Обновление и добавление информации о видео',
        imageUrl: formThumbnail,
        link: form
    }
]

const Anime = () => {
    return (
        <ProjectArticle>
            <div>
                <SimpleCarousel data={data} imageWidth={400} imageHeight={225} carouselWidth={600} carouselHeight={225}>
                    {
                        data.map((e, i) => (
                            <SimpleCarouselElement key={i} resource={e} width={400} height={225}>
                                <picture>
                                    <source srcSet={e.imageUrl[0]} type={'image/avif'}/>
                                    <source srcSet={e.imageUrl[1]} type={'image/webp'}/>
                                    <img loading={'lazy'} src={e.imageUrl[2]} alt={e.title}/>
                                </picture>
                            </SimpleCarouselElement>
                        ))
                    }
                </SimpleCarousel>
            </div>
            <ProjectDescription>
                <ProjectHeader>
                    Онлайн энциклопедия по сериалам и фильмам
                </ProjectHeader>
                <span>Ключевые особенности</span>
                <FeatureList>
                    <li>Динамические SQL запросы поиска по параметрам - параметры запроса хранятся в url</li>
                    <li>Отзывчивое взаимодействие - оптимистичные запросы к backend</li>
                    <li>Адаптивный интерфейс</li>
                    <li>Авторизация и аутентификация</li>
                    <li>Ведение списков просмотра видео: запланировано, смотрю, просмотренно, отложено</li>
                    <li>Drag&Drop для перемещения видео между списками</li>
                    <li>Встроенные средства для обновления контента</li>
                </FeatureList>
                <span>Используемые технологии</span>
                <TechnologyList>
                    <Item>Java Spring</Item>
                    <Item>PostgreSQL</Item>
                    <Item>JWT</Item>
                    <Item>React</Item>
                    <Item>TypeScript</Item>
                    <Item>Zustand</Item>
                    <Item>Tanstack Query</Item>
                    <Item>Tailwind CSS</Item>
                </TechnologyList>
                <SourceLink href={'https://github.com/kemper0110/video-library'}/>
            </ProjectDescription>
        </ProjectArticle>
    );
};

export default Anime;