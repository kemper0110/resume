import {FeatureList, ProjectArticle, ProjectDescription, ProjectHeader, TechnologyList} from "./Projects.tsx";
import {Item} from "../../components/Item.tsx";
import SourceLink from "../../components/SourceLink.tsx";
import SimpleCarousel, {SimpleCarouselElement} from "../../components/SimpleCarousel.tsx";
import {Resource} from "../../components/Carousel.tsx";

import castling from '@/assets/chess/castling.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import castlingThumbnail from '@/assets/chess/castling.png?w=300&format=avif;webp;jpeg'

import enpassant from '@/assets/chess/enpassant.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import enpassantThumbnail from '@/assets/chess/enpassant.png?w=300&format=avif;webp;jpeg'

import defence from '@/assets/chess/defence.png'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import defenceThumbnail from '@/assets/chess/defence.png?w=300&format=avif;webp;jpeg'

const data: Resource[] = [
    {
        title: 'Рокировка',
        link: castling,
        imageUrl: castlingThumbnail
    },
    {
        title: 'Ход пешкой запрещен',
        link: defence,
        imageUrl: defenceThumbnail
    },
    {
        title: 'Взятие на проходе',
        link: enpassant,
        imageUrl: enpassantThumbnail
    }
];

const Chess = () => (
    <ProjectArticle>
        <div>
            <SimpleCarousel data={data}
                            imageWidth={300} carouselWidth={500}
                            imageHeight={300}
                            carouselHeight={300}
            >
                {
                    data.map((e, i) => (
                        <SimpleCarouselElement key={i} resource={e} width={300} height={300}>
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
                Компьютерная игра - шахматы онлайн
            </ProjectHeader>
            <span>Ключевые особенности</span>
            <FeatureList>
                <li>реализованы алгоритмы ходов всех фигур;</li>
                <li>проверка на мат и пат;</li>
                <li>защита от хода фигурой, закрывающей короля от боя;</li>
                <li>рокировка в короткую и длинную сторону;</li>
                <li>взятие на проходе пешкой;</li>
                <li>превращение пешки;</li>
                <li>возможность игры одному;</li>
                <li>возможность игры с противником по сети интернет или передавая управление.</li>
            </FeatureList>
            <span>Используемые технологии</span>
            <TechnologyList>
                <Item>C++</Item>
                <Item>WebSocket</Item>
                <Item>SFML</Item>
            </TechnologyList>
            <SourceLink href={'https://github.com/kemper0110/sfml_chess'}/>
        </ProjectDescription>
    </ProjectArticle>
)

export default Chess;