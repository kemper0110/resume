import {Item} from "../../components/Item.tsx";
import {Resource} from "../../components/Carousel.tsx";
import main from '../../assets/anime/main.png';
import popup from '../../assets/anime/popup.png';
import detailed from '../../assets/anime/detailed.png';
import statuslist from '../../assets/anime/statuslist.png';
import form from '../../assets/anime/form.png';
import SimpleCarousel from "../../components/SimpleCarousel.tsx";
import SourceLink from "../../components/SourceLink.tsx";
import {FeatureList, ProjectArticle, ProjectDescription, ProjectHeader, TechnologyList} from "./Projects.tsx";

const Anime = () => {
    return (
        <ProjectArticle>
            <Preview/>
            <Description/>
        </ProjectArticle>
    );
};

const Description = () => (
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
            <Item label={'Java Spring'}/>
            <Item label={'PostgreSQL'}/>
            <Item label={'JWT'}/>
            <Item label={'React'}/>
            <Item label={'TypeScript'}/>
            <Item label={'Zustand'}/>
            <Item label={'Tanstack Query'}/>
            <Item label={'Tailwind CSS'}/>
        </TechnologyList>
        <SourceLink href={'https://github.com/kemper0110/video-library'}/>
    </ProjectDescription>
)

const data: Resource[] = [
    {
        title: 'Поиск видео',
        imageUrl: main,
        link: main
    },
    {
        title: 'Подробная информация при наведении на видео',
        imageUrl: popup,
        link: popup
    },
    {
        title: 'Страница с подробной информацией',
        imageUrl: detailed,
        link: detailed
    },
    {
        title: 'Ведение списка просмотра',
        imageUrl: statuslist,
        link: statuslist
    },
    {
        title: 'Обновление и добавление информации о видео',
        imageUrl: form,
        link: form
    }
]
const Preview = () => (
    <div>
        <SimpleCarousel data={data} imageWidth={400} imageHeight={225} carouselWidth={600} carouselHeight={225}/>
    </div>
)

export default Anime;