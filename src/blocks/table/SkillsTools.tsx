/*
    C++20
    никому не интересно:
        asio(with c++20 coroutines), beast, bimap, circular buffer, Graph library, Intrusive
        asm8086 STL
*/

import {Item} from "../../components/Item.tsx";
import {ReactNode} from "react";
import {TableContent, TableHeader} from "./Table.tsx";
import tw from "twin.macro";

const SkillsTools = () => {
    return (
        <tr>
            <TableHeader>Skills & Tools</TableHeader>
            <TableContent>
                <FeatureTable caption={'Languages'}>
                    <tr>
                        <Heading>Frontend</Heading>
                        <Data>
                            <Item>HTML</Item>
                            <Item>CSS</Item>
                            <Item>JavaScript</Item>
                            <Item>TypeScript</Item>
                        </Data>
                    </tr>
                    <tr>
                        <Heading>Backend</Heading>
                        <Data>
                            <Item>Java</Item>
                            <Item>SQL</Item>
                            <Item>C++</Item>
                            <Item>C#</Item>
                            <Item>Python</Item>
                            <Item>JavaScript</Item>
                            <Item>TypeScript</Item>
                        </Data>
                    </tr>
                </FeatureTable>
                <FeatureTable caption={'Technologies'}>
                    <tr>
                        <Heading>Frontend</Heading>
                        <Data>
                            <Item>Tailwind CSS</Item>
                            <Item>React Query</Item>
                            <Item>Redux Toolkit</Item>
                            <Item>Zustand</Item>
                        </Data>
                    </tr>
                    <tr>
                        <Heading>Backend</Heading>
                        <Data>
                            <Item>Spring</Item>
                            <Item>PostgreSQL</Item>
                            <Item>HTTP/REST</Item>
                        </Data>
                    </tr>
                </FeatureTable>
                <FeatureTable caption={'Tools'}>
                    <tr>
                        <Heading>Coding</Heading>
                        <Data>
                            <Item>Git</Item>
                            <Item>Ubuntu</Item>
                        </Data>
                    </tr>
                </FeatureTable>
                <FeatureTable caption={'Knowledge'}>
                    <tr>
                        <Heading>Programming</Heading>
                        <Data>
                            <Item>ООП</Item>
                            <Item>Многопоточность и многозадачность</Item>
                            <Item>Реляционные базы данных</Item>
                        </Data>
                    </tr>
                    <tr>
                        <Heading>Computer Science</Heading>
                        <Data>
                            <Item>ISO OSI</Item>
                            <Item>TCP</Item>
                            <Item>UDP</Item>
                            <Item>HTTP</Item>
                            <Item>REST API</Item>
                            <Item>asm8086</Item>
                        </Data>
                    </tr>
                    <tr>
                        <Heading>Data structure</Heading>
                        <Data>
                            <Item>Стек</Item>
                            <Item>Очередь</Item>
                            <Item>Динамический массив</Item>
                            <Item>Бинарное дерево</Item>
                            <Item>Хеш-таблица</Item>
                        </Data>
                    </tr>
                </FeatureTable>
            </TableContent>
        </tr>
    );
};

const FeatureTable = ({caption, children}: { caption: string, children: ReactNode | ReactNode[] }) => (
    <table tw={'mt-4'}>
        <caption tw={'text-lg font-semibold text-left align-top'}>
            {caption}
        </caption>
        <tbody>
        {children}
        </tbody>
    </table>
)
const Heading = tw.th`dark:text-slate-400 dark:font-light font-thin min-w-[100px] text-left align-top`
const Data = tw.td`flex flex-wrap gap-1`

export default SkillsTools;