import {TfiCup} from "react-icons/tfi";
import {Item} from "../../components/Item.tsx";
import {BsFire} from "react-icons/bs";
import {Accordion} from "../../components/Accordion.tsx";
import {TableContent, TableHeader} from "./Table.tsx";
import tw from "twin.macro";
import {CalendarIcon} from "@/components/DatePeriod.tsx";

const Competitions = () => {
    return (
        <tr>
            <TableHeader>
                Участие в конкурсах
            </TableHeader>
            <TableContent>
                <CompanyWrapper>
                    <TitleWrapper>
                        <Title>День карьеры ДГТУ 2023 - Вебант</Title>
                        <SimpleDate>
                            <CalendarIcon/>
                            <time dateTime={'2021-03'}>Март 2023</time>
                        </SimpleDate>
                    </TitleWrapper>
                    <ItemContainer>
                        <Item>React</Item>
                        <Item>NodeJS</Item>
                        <Item>ExpressJS</Item>
                        <Item>PostgreSQL</Item>
                        <Item>Chrome extension</Item>
                    </ItemContainer>
                    <Accordion label={
                            <AccordionLabelWrapper>
                            <span>
                                Разработал веб-приложение для парсинга резюме с сайта <a href={'https://hh.ru'}
                                                                                 tw='text-blue-400 underline'>hh.ru</a>,
                                реализовал дополнительные возможности по улучшению пользовательского опыта.
                            </span>
                                <ResultWrapper>
                                    <Cup/>
                                    <ResultText>Победитель</ResultText>
                                </ResultWrapper>
                            </AccordionLabelWrapper>
                        }
                    >
                        <AccordionContentWrapper>
                            <span>Выполненные требования: </span>
                            <ul tw={'list-disc ms-5'}>
                                <li>парсинг основных атрибутов по ссылке на резюме;</li>
                                <li>сохранение в базу данных после проверки пользователем;</li>
                                <li>веб-интерфейс для CRUD операций над резюме.</li>
                            </ul>
                            <span>Дополнительно реализовано: </span>
                            <ul tw={'list-none ms-5'}>
                                <li>
                                    <BsFire tw={'inline'}/>
                                    chrome extension content script - встраивает в страницу резюме кнопку для парсинга
                                </li>
                                <li>
                                    <BsFire tw={'inline'}/>
                                    chrome extension popup script - добавляет в браузер popup окно с возможностью
                                    моментального
                                    парсинга прямо из браузера
                                </li>
                            </ul>
                        </AccordionContentWrapper>
                    </Accordion>
                </CompanyWrapper>


                <CompanyWrapper>
                    <TitleWrapper>
                        <Title>Хакатон 2023 - Ростелеком</Title>
                        <SimpleDate>
                            <CalendarIcon/>
                            <time dateTime={'2021-03'}>Март 2023</time>
                        </SimpleDate>
                    </TitleWrapper>
                    <ItemContainer>
                        <Item>React</Item>
                        <Item>XLSX</Item>
                    </ItemContainer>
                    <Accordion label={
                        <AccordionLabelWrapper>
                            <span>
                                Разработал веб-приложение для работы с таблицами Excel внутри браузера.
                            </span>
                            <ResultWrapper>
                                <Cup/>
                                <ResultText>Финалист</ResultText>
                            </ResultWrapper>
                        </AccordionLabelWrapper>
                    }>
                        <AccordionContentWrapper>
                            <span>Выполненные требования: </span>
                            <ul tw={'list-disc ms-5'}>
                                <li>поиск заявок на подключение к сети по имени или ИНН клиента;</li>
                                <li>обнаружение "запоздавших" по времени исполнения заявок (SLA);</li>
                                <li>программная реализация в виде веб-приложения;</li>
                                <li>возможность работы в оффлайн;</li>
                                <li>дальнейшая возможность подключения к внутреннему REST API компании.</li>
                            </ul>
                        </AccordionContentWrapper>
                    </Accordion>
                </CompanyWrapper>


                <CompanyWrapper>
                    <TitleWrapper>
                        <Title>Хакатон 2021 - ТТК</Title>
                        <SimpleDate>
                            <CalendarIcon/>
                            <time dateTime={'2021-03'}>Март 2021</time>
                        </SimpleDate>
                    </TitleWrapper>
                    <ItemContainer>
                        <Item>Python</Item>
                        <Item>Selenium</Item>
                        <Item>PyQT5</Item>
                    </ItemContainer>
                    <Accordion label={
                        <AccordionLabelWrapper>
                            <span>
                                Разработал парсер железнодорожных рейсов для старого и нового сайтов РЖД,
                                успешно провел тестирование на совпадение рейсов.
                            </span>
                            <ResultWrapper>
                                <Cup/>
                                <ResultText>Победитель</ResultText>
                            </ResultWrapper>
                        </AccordionLabelWrapper>
                    }>
                        <AccordionContentWrapper>
                            <span>Выполненные требования: </span>
                            <ul tw={'list-disc ms-5'}>
                                <li>формирование таблицы excel извлеченным данным;</li>
                                <li>анализ результатов тестирования и вывод в таблицу;</li>
                                <li>выделение ошибочных результатов в таблице.</li>
                            </ul>
                        </AccordionContentWrapper>
                    </Accordion>
                </CompanyWrapper>
            </TableContent>
        </tr>
    );
};

const Title = tw.span`font-medium text-2xl`
const TitleWrapper = tw.div`flex flex-wrap justify-between`
const ResultWrapper = tw.div`flex gap-2 items-center`
const Cup = TfiCup
const ResultText = tw.div`text-lg`
const CompanyWrapper = tw.div`pb-5`
const ItemContainer = tw.div`flex flex-wrap gap-x-3 gap-y-1 mt-2`
const AccordionLabelWrapper = tw.div`max-w-[800px]`
const AccordionContentWrapper = tw.div`py-3`
const SimpleDate = tw.div`flex gap-1 items-center`

export default Competitions;