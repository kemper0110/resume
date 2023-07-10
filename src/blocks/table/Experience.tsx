import {TfiCup} from "react-icons/tfi";
import SimpleDate from "../../components/SimpleDate.tsx";
import {Item} from "../../components/Item.tsx";
import {BsFire} from "react-icons/bs";
import {Accordion} from "../../components/Accordion.tsx";
import {ReactNode} from "react";
import {TableContent, TableHeader} from "./Table.tsx";

const Experience = () => {
    return (
        <tr>
            <TableHeader title={'Опыт работы'}/>
            <TableContent>
                <HackathonWebant/>
                <HackathonRostelecom/>
                <HackathonTTK/>
            </TableContent>
        </tr>
    );
};


const CompanyWrapper = ({children}: { children: ReactNode }) => (
    <div className={'pb-5'}>
        {children}
    </div>
)
const TitleWrapper = ({title, children}: { title: string, children: ReactNode }) => (
    <div className={'flex flex-wrap justify-between'}>
        <span className={'font-medium text-2xl'}>{title}</span>
        {children}
    </div>
)
const ItemContainer = ({children}: { children: ReactNode[] }) => (
    <div className='flex flex-wrap gap-x-3 gap-y-1 mt-2'>
        {children}
    </div>
)

const Cup = ({title}: { title: string }) => (
    <div className={'flex gap-2 items-center'}>
        <TfiCup color={''}/>
        <span className={'text-lg'}>{title}</span>
    </div>
)
const AccordionLabelWrapper = ({children}: { children: ReactNode[] }) => (
    <div className={'max-w-[800px]'}>
        {children}
    </div>
)
const AccordionContentWrapper = ({children}: { children: ReactNode[] }) => (
    <div className={'py-3'}>
        {children}
    </div>
)

const HackathonWebant = () => (
    <CompanyWrapper>
        <TitleWrapper title={'День карьеры ДГТУ 2023 - Вебант'}>
            <SimpleDate date={<time dateTime={'2021-03'}>Март 2023</time>}/>
        </TitleWrapper>
        <ItemContainer>
            <Item label={'React'}/>
            <Item label={'NodeJS'}/>
            <Item label={'ExpressJS'}/>
            <Item label={'PostgreSQL'}/>
            <Item label={'Chrome extension'}/>
        </ItemContainer>
        <Accordion
            label={
                <AccordionLabelWrapper>
                    <span className={''}>
                                        Разработал веб-приложение для парсинка резюме с сайта <a href={'https://hh.ru'}
                                                                                                 className='text-blue-400 underline'>hh.ru</a>
                                        , реализовал дополнительные возможности по улучшению пользовательского опыта.
                    </span>
                    <Cup title={'Победитель'}/>
                </AccordionLabelWrapper>
            }
        >
            <AccordionContentWrapper>
                <span className={''}>Выполненные требования: </span>
                <ul className={'list-disc ms-5'}>
                    <li>парсинг основных атрибутов по ссылке на резюме;</li>
                    <li>сохранение в базу данных после проверки пользователем;</li>
                    <li>веб-интерфейс для CRUD операций над резюме.</li>
                </ul>
                <span className={''}>Дополнительно реализовано: </span>
                <ul className={'list-none ms-5'}>
                    <li>
                        <BsFire className={'inline'}/>
                        chrome extension content script - встраивает в страницу резюме кнопку для парсинга
                    </li>
                    <li>
                        <BsFire className={'inline'}/>
                        chrome extension popup script - добавляет в браузер popup окно с возможностью моментального
                        парсинга прямо из браузера
                    </li>
                </ul>
            </AccordionContentWrapper>
        </Accordion>
    </CompanyWrapper>
)


const HackathonRostelecom = () => (
    <CompanyWrapper>
        <TitleWrapper title={'Хакатон 2023 - Ростелеком'}>
            <SimpleDate date={<time dateTime={'2021-03'}>Март 2023</time>}/>
        </TitleWrapper>
        <ItemContainer>
            <Item label={'React'}/>
            <Item label={'XLSX'}/>
        </ItemContainer>
        <Accordion label={
            <AccordionLabelWrapper>
                <span>
                    Разработал веб-приложение для работы с таблицами Excel внутри браузера.
                </span>
                <Cup title={'Финалист'}/>
            </AccordionLabelWrapper>
        }>
            <AccordionContentWrapper>
                <span>Выполненные требования: </span>
                <ul className={'list-disc ms-5'}>
                    <li>поиск заявок на подключение к сети по имени или ИНН клиента;</li>
                    <li>обнаружение "запоздавших" по времени исполнения заявок (SLA);</li>
                    <li>программная реализация в виде веб-приложения;</li>
                    <li>возможность работы в оффлайн;</li>
                    <li>дальнейшая возможность подключения к внутреннему REST API компании.</li>
                </ul>
            </AccordionContentWrapper>
        </Accordion>
    </CompanyWrapper>
)


const HackathonTTK = () => (
    <CompanyWrapper>
        <TitleWrapper title={'Хакатон 2021 - ТТК'}>
            <SimpleDate date={<time dateTime={'2021-03'}>Март 2021</time>}/>
        </TitleWrapper>
        <ItemContainer>
            <Item label={'Python'}/>
            <Item label={'Selenium'}/>
            <Item label={'PyQT5'}/>
        </ItemContainer>
        <Accordion label={
            <AccordionLabelWrapper>
                <span>
                    Разработал парсер железнодорожных рейсов для старого и нового сайтов РЖД,
                    успешно провел тестирование на совпадение рейсов.
                </span>
                <Cup title={'Победитель'}/>
            </AccordionLabelWrapper>
        }>
            <AccordionContentWrapper>
                <span className={''}>Выполненные требования: </span>
                <ul className={'list-disc ms-5'}>
                    <li>формирование таблицы excel извлеченным данным;</li>
                    <li>анализ результатов тестирования и вывод в таблицу;</li>
                    <li>выделение ошибочных результатов в таблице.</li>
                </ul>
            </AccordionContentWrapper>
        </Accordion>
    </CompanyWrapper>
)


export default Experience;