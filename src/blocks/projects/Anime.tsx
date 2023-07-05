import {Item} from "../../components/Item.tsx";
import {Resource} from "../../components/Carousel.tsx";
import main from '../../assets/anime/main.png';
import popup from '../../assets/anime/popup.png';
import detailed from '../../assets/anime/detailed.png';
import statuslist from '../../assets/anime/statuslist.png';
import form from '../../assets/anime/form.png';
import SimpleCarousel from "../../components/SimpleCarousel.tsx";
import SourceLink from "../../components/SourceLink.tsx";

const Anime = () => {
    return (
        <article className={'flex flex-col mt-10 gap-x-8 gap-y-5 border-b dark:border-b-divideDark border-b-divideLight pb-5 '}>
            <Preview/>
            <Description/>
        </article>
    );
};

const Description = () => (
    <div className={'w-full'}>
        <h3 className={'text-3xl font-medium '}>
            Онлайн энциклопедия по сериалам и фильмам
        </h3>
        <span className={''}>
            Ключевые особенности
        </span>
        <ul className={' list-inside list-disc'}>
            <li>Динамические SQL запросы поиска по параметрам - параметры запроса хранятся в url</li>
            <li>Отзывчивое взаимодействие - оптимистичные запросы к backend</li>
            <li>Адаптивный интерфейс</li>
            <li>Авторизация и аутентификация</li>
            <li>Ведение списков просмотра видео: запланировано, смотрю, просмотренно, отложено</li>
            <li>Drag&Drop для перемещения видео между списками</li>
            <li>Встроенные средства для обновления контента</li>
        </ul>
        <span className={''}>Используемые технологии</span>
        <div className={'flex whitespace-nowrap flex-wrap gap-x-2 gap-y-1'}>
            <Item label={'Java Spring'}/>
            <Item label={'PostgreSQL'}/>
            <Item label={'JWT'}/>
            <Item label={'React'}/>
            <Item label={'TypeScript'}/>
            <Item label={'Zustand'}/>
            <Item label={'Tanstack Query'}/>
            <Item label={'Tailwind CSS'}/>
        </div>
        <SourceLink href={'https://github.com/kemper0110/video-library'}/>
    </div>
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
    <div className={'w-full'}>
        <SimpleCarousel data={data} imageWidth={400} imageHeight={225} carouselWidth={600} carouselHeight={225}/>
    </div>
)

export default Anime;