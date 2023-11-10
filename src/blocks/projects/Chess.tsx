import {FeatureList, ProjectArticle, ProjectDescription, ProjectHeader, TechnologyList} from "./Projects.tsx";
import {Item} from "../../components/Item.tsx";
import SourceLink from "../../components/SourceLink.tsx";
import SimpleCarousel from "../../components/SimpleCarousel.tsx";
import {Resource} from "../../components/Carousel.tsx";

import castling from '../../assets/chess/castling.png'
import enpassant from '../../assets/chess/enpassant.png'
import defence from '../../assets/chess/defence.png'

const data: Resource[] = [
    {
        title: 'Рокировка',
        link: castling,
        imageUrl: castling
    },
    {
        title: 'Ход пешкой запрещен',
        link: defence,
        imageUrl: defence
    },
    {
        title: 'Взятие на проходе',
        link: enpassant,
        imageUrl: enpassant
    }
];

const Chess = () => (
    <ProjectArticle>
        <div>
            <SimpleCarousel data={data}
                            imageWidth={300} carouselWidth={500}
                            imageHeight={300}
                            carouselHeight={300}
            />
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