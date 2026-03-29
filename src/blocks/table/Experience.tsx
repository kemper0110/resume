import {TableContent, TableHeader} from "./Table.tsx";
import {CalendarIcon} from "@/components/DatePeriod.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";
import {Tag} from "@/components/Tag.tsx";
import {Link} from "@/components/Link.tsx";

const Title = tw.div`font-medium text-2xl`
const ExperienceTitle = tw.div`font-semibold text-xl`
const ExperienceWrapper = tw.div`pt-1 mt-1 border-t border-divideLight dark:border-divideDark`
const TitleWrapper = tw.div`flex flex-wrap justify-between`
const CompanyWrapper = tw.div`pb-5`
const TagContainer = tw.div`flex flex-wrap gap-x-3 gap-y-1 mt-1`
const SimpleDate = tw.div`flex gap-1 items-center`

export const Experience = () => {
    const RTL = <Link target={'_blank'} href={'https://en.wikipedia.org/wiki/Right-to-left_script'}>RTL</Link>
    const storybook = <Link href={'https://storybook.js.org/'} target={'_blank'}>storybook</Link>
    return (
        <tr>
            <TableHeader>
                Опыт работы
            </TableHeader>
            <TableContent>
                <CompanyWrapper>
                    <TitleWrapper>
                        <Title>Главный ИТ Инженер - SberTech</Title>
                        <SimpleDate>
                            <CalendarIcon/>
                            <time dateTime={'2023-08'}>Март 2024</time>
                            <span>-</span>
                            <time dateTime={new Date().toLocaleDateString('fr-CA')}>Сейчас</time>
                        </SimpleDate>
                    </TitleWrapper>
                    <ExperienceWrapper tw={"mt-1 border-t-0"}>
                        <ExperienceTitle>
                            Сервис запуска пользовательского TypeScript-кода
                        </ExperienceTitle>
                        <TagContainer>
                            <Tag>Deno</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>React</Tag>
                        </TagContainer>
                        <div>
                            Эволюция системы:
                            <ol tw={'list-decimal ms-5'}>
                                <li>
                                    Контейнерная модель:
                                    <ul tw={'list-disc ms-5'}>
                                        <li>Изолированный запуск через Docker + Kubernetes (kubeapi, helm)</li>
                                        <li>Frontend: редактор (Monaco), файловое дерево, автокомплит библиотек</li>
                                    </ul>
                                </li>
                                <li>
                                    Переход на process-based execution (serverless-подобная модель):
                                    <ul tw={'list-disc ms-5'}>
                                        <li>Убрал контейнеры → запуск в отдельных процессах</li>
                                        <li>Ленивый старт по запросу</li>
                                        <li>Выгрузка при простое</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div>
                            Результат:
                            <ul tw={'list-disc ms-5'}>
                                <li>Снижение overhead на запуск</li>
                                <li>Быстрый cold start (до 1 секунды)</li>
                                <li>Более плотная утилизация ресурсов (коммунальный режим)</li>
                            </ul>
                            Отдельно:
                            <ul tw={'list-disc ms-5'}>
                                <li>Интеграция с MCP (понимание протокола и ограничений)</li>
                            </ul>
                        </div>
                    </ExperienceWrapper>
                    <ExperienceWrapper>
                        <ExperienceTitle>
                            GraphQL Федерация сервисов: Schema Stitching + Разрешение конфликтов
                        </ExperienceTitle>
                        <TagContainer>
                            <Tag>GraphQL</Tag>
                            <Tag>GraphQL Tools: Schema Stitching</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Node.js</Tag>
                        </TagContainer>
                        <div>
                            Спроектировал и реализовал сервер объединения GraphQL схем с разрешением конфликтов:
                        </div>
                        <ul tw={'list-disc ms-5'}>
                            <li>Переименование и устранение коллизий типов</li>
                            <li>UI для визуального разрешения конфликтов</li>
                            <li>Поддержка объединения сложных схем</li>
                        </ul>
                        <div>
                            Результат:
                            <ul tw={'list-disc ms-5'}>
                                <li>Объединение нескольких datasource в единый API без ручной правки схем</li>
                                <li>Ускорение интеграции новых сервисов</li>
                            </ul>
                        </div>
                    </ExperienceWrapper>
                    <ExperienceWrapper>
                        <ExperienceTitle>
                            Open Source: GraphQL → MCP Adapter
                        </ExperienceTitle>
                        <div>
                            Разработка библиотеки для адаптации GraphQL API под MCP:
                            <ul tw={'list-disc ms-5'}>
                                <li>Работа со схемой и фиксированными операциями</li>
                                <li>Генерация TypeScript-кода</li>
                            </ul>
                            Результат:
                            <ul tw={'list-disc ms-5'}>
                                <li>Упрощение интеграции GraphQL сервисов в MCP-экосистему</li>
                                <li>Подготовка технической статьи на Хабр. Скоро появится!</li>
                            </ul>
                        </div>
                    </ExperienceWrapper>
                    <ExperienceWrapper>
                        <ExperienceTitle>
                            Frontend Refactoring: Removing Backend from Critical Path
                        </ExperienceTitle>
                        Переписал ключевую часть системы, убрав зависимость от backend при редактировании:
                        <div>
                            До:
                            <ul tw={'list-disc ms-5'}>
                                <li>Любое действие → запрос на backend</li>
                            </ul>
                        </div>
                        <div>
                            После:
                            <ul tw={'list-disc ms-5'}>
                                <li>Полностью локальная работа с XML</li>
                            </ul>
                        </div>
                        <div>
                            Что сделано:
                            <ul tw={'list-disc ms-5'}>
                                <li>Парсинг XML → внутренняя модель</li>
                                <li>Иммутабельные изменения через Immer</li>
                                <li>Бесплатный Undo/Redo с Immer produceWithPatches</li>
                                <li>State management через Effector</li>
                                <li>Кеширование (WeakMap)</li>
                                <li>Быстрая сериализация</li>
                            </ul>
                        </div>
                        <div>
                            Метрики:

                            <ul tw={'list-disc ms-5'}>
                                <li>200kb XML → полная сериализация за ~15ms</li>
                                <li>Минимальные изменения UI слоя</li>
                                <li>Сохранена backward compatibility</li>
                            </ul>
                        </div>
                        <div>
                            Результат:

                            <ul tw={'list-disc ms-5'}>
                                <li>Существенное снижение latency</li>
                                <li>UI перестал зависеть от сети</li>
                            </ul>
                        </div>
                    </ExperienceWrapper>
                    <ExperienceWrapper>
                        <ExperienceTitle>
                            UI Migration: 100k LOC → Internal Design System
                        </ExperienceTitle>
                        <div>
                            Миграция крупного фронтенд-проекта на внутренний UI kit:

                            <ul tw={'list-disc ms-5'}>
                                <li>100k строк кода</li>
                                <li>2 инженера под моим управлением (junior dev + QA)</li>
                                <li>Я отвечал за сложные компоненты и интеграцию</li>
                            </ul>
                        </div>
                        <div>
                            Сроки:
                            <ul tw={'list-disc ms-5'}>
                                <li>1 месяц — миграция</li>
                                <li>1 месяц — стабилизация</li>
                            </ul>
                        </div>
                        <div>
                            Результат:
                            <ul tw={'list-disc ms-5'}>
                                <li>Унификация UI</li>
                                <li>Упрощение дальнейшей разработки</li>
                            </ul>
                        </div>
                    </ExperienceWrapper>
                </CompanyWrapper>
                <CompanyWrapper tw={'pt-2 border-t-2 border-divideLight dark:border-divideDark'}>
                    <TitleWrapper>
                        <Title>Full-stack developer - IT-Delta</Title>
                        <SimpleDate>
                            <CalendarIcon/>
                            <time dateTime={'2023-08'}>Март 2023</time>
                            <span>-</span>
                            <time dateTime={'2024-02'}>Февраль 2024</time>
                        </SimpleDate>
                    </TitleWrapper>
                    <TagContainer>
                        <Tag>React</Tag>
                        <Tag>Laravel</Tag>
                        <Tag>Storybook</Tag>
                        <Tag>I18Next</Tag>
                        <Tag>RTL</Tag>
                        <Tag>Tailwind</Tag>
                        <Tag>CSS-in-JS</Tag>
                    </TagContainer>
                    <div tw={'mt-2'}>
                        <ul tw={'list-disc ms-5'}>
                            <li>Разработал мультиязычное приложение, помогающее людям находить и предоставлять
                                строительные услуги.
                            </li>
                            <li>Создал гайдлайн, содержащий рекомендации по верстке веб-сайтов с
                                поддержкой {RTL} направления текста для удобства ивритоязычных пользователей.
                            </li>
                            <li>Внедрил документацию компонентов с {storybook} для ознакомления команды с новыми
                                компонентами на проекте.
                            </li>
                            <li>Приложение доступно на четырех языках: английском, русском, иврите и арабском.</li>
                            <li>Проводил интеграцию REST API с версткой веб-страницы.</li>
                            <li>Подключил REST API для перевода описания проектов на выбранный язык.</li>
                            <li>Разработал несколько сложных по логике хуков.</li>
                        </ul>
                    </div>
                </CompanyWrapper>
            </TableContent>
        </tr>
    )
}