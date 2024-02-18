import {TableContent, TableHeader} from "./Table.tsx";
import {CalendarIcon} from "@/components/DatePeriod.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";
import {Item} from "@/components/Item.tsx";
import {Link} from "@/components/Link.tsx";

const Title = tw.span`font-medium text-2xl`
const TitleWrapper = tw.div`flex flex-wrap justify-between`
const CompanyWrapper = tw.div`pb-5`
const ItemContainer = tw.div`flex flex-wrap gap-x-3 gap-y-1 mt-2`
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
                        <Title>Full-stack developer - IT-Delta</Title>
                        <SimpleDate>
                            <CalendarIcon/>
                            <time dateTime={'2023-08'}>Август 2023</time>
                            <span>-</span>
                            <time dateTime={'2024-02'}>Февраль 2024</time>
                        </SimpleDate>
                    </TitleWrapper>
                    <ItemContainer>
                        <Item>React</Item>
                        <Item>Laravel</Item>
                        <Item>Storybook</Item>
                        <Item>I18Next</Item>
                        <Item>RTL</Item>
                        <Item>Tailwind</Item>
                        <Item>CSS-in-JS</Item>
                    </ItemContainer>
                    <div tw={'mt-2'}>
                        <ul tw={'list-disc ms-5'}>
                            <li>Разрабатываю мультиязычное приложение, помогающее людям находить и предоставлять строительные услуги.</li>
                            <li>Создал гайдлайн, содержащий рекомендации по верстке веб-сайтов с поддержкой {RTL} направления текста для удобства ивритоязычных пользователей.</li>
                            <li>Веду документацию компонентов в {storybook} для ознакомления команды с новыми компонентами на проекте.</li>
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