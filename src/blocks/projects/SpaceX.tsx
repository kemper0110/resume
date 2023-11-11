import {FeatureList, ProjectArticle, ProjectDescription, ProjectHeader, TechnologyList} from "./Projects.tsx";
import {Item} from "../../components/Item.tsx";
import SourceLink from "../../components/SourceLink.tsx";
import OpenProjectLink, {LinkExternal} from "../../components/OpenProjectLink.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from 'twin.macro';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import spacexOriginal from '@/assets/spacex.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import spacexJpeg from '@/assets/spacex.png?w=444&format=jpeg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import spacexAvif from '@/assets/spacex.png?w=444&format=avif';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import spacexWebp from '@/assets/spacex.png?w=444&format=webp';


const SpaceX = () => (
    <ProjectArticle>
        <div tw={'flex justify-center'}>
            <a href={spacexOriginal} target={'_blank'}>
                <picture>
                    <source srcSet={spacexAvif} type='image/avif'/>
                    <source srcSet={spacexWebp} type='image/webp'/>
                    <img src={spacexJpeg} alt={'Главный экран spacex'}/>
                </picture>
            </a>
        </div>
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
                <Item>Python</Item>
                <Item>Django</Item>
                <Item>PostgreSQL</Item>
                <Item>React</Item>
                <Item>React Query</Item>
                <Item>TypeScript</Item>
                <Item>TailwindCSS</Item>
            </TechnologyList>
            <div tw={'flex gap-2'}>
                <SourceLink href={'https://github.com/kemper0110/spacex'}/>
                <SourceLink href={'https://github.com/kemper0110/spacex-django-react'}/>
                <OpenProjectLink target={'_blank'} href={'https://spacex-frontend-gilt.vercel.app/'}>
                    Перейти на сайт <LinkExternal size={24}/>
                </OpenProjectLink>
            </div>
        </ProjectDescription>
    </ProjectArticle>
)
export default SpaceX