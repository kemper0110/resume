import {FeatureList, ProjectArticle, ProjectDescription, ProjectHeader, TechnologyList} from "./Projects.tsx";
import {Item} from "../../components/Item.tsx";
import SourceLink from "../../components/SourceLink.tsx";
import OpenProjectLink from "../../components/OpenProjectLink.tsx";
import spacexThumbnail from '../../assets/spacexThumbnail.png';
import spacex from '../../assets/spacex.png';


const SpaceX = () => (
    <ProjectArticle>
        <Preview/>
        <Description/>
    </ProjectArticle>
)
export default SpaceX

const Preview = () => (
    <div className={'mx-auto'}>
        <a
            href={spacex} target={'_blank'}
        >
            <img src={spacexThumbnail} alt={''} className={''}/>
        </a>
    </div>
)

const Description = () => (
    <ProjectDescription>
        <ProjectHeader>
            SpaceX - Тестовое задание от SAGIROV.com
        </ProjectHeader>
        <span>Выполненные требования</span>
        <FeatureList>
            <li>верстка первого экрана главной страницы по макету .psd от дизайнера компании;</li>
            <li>Frontend на React, Backend на Django;</li>
            <li>адаптив на месте, сайт выглядит гармонично и на телефончиках;</li>
            <li>через админку Django можно управлять пунктами меню навигации;</li>
            <li>гибкое редактирование контента блоков преимуществ в формате json.</li>
        </FeatureList>
        <span>Используемые технологии</span>
        <TechnologyList>
            <Item label={'Python'}/>
            <Item label={'Django'}/>
            <Item label={'PostgreSQL'}/>
            <Item label={'React'}/>
            <Item label={'React Query'}/>
            <Item label={'TypeScript'}/>
            <Item label={'TailwindCSS'}/>
        </TechnologyList>
        <div className={'flex gap-2'}>
            <SourceLink href={'https://github.com/kemper0110/spacex'}/>
            <SourceLink href={'https://github.com/kemper0110/spacex-django-react'}/>
            <OpenProjectLink href={'https://spacex-frontend-gilt.vercel.app/'}/>
        </div>
    </ProjectDescription>
)