/*
    C++20
    никому не интересно:
        asio(with c++20 coroutines), beast, bimap, circular buffer, Graph library, Intrusive
        asm8086
        STL
    Knowledges
    Technical English, want new frameworks, libraries
 */

import {Item} from "../../components/Item.tsx";
import {ReactNode} from "react";

const SkillsTools = () => {
    return (
        <tr className={''}>
            <th className={'md:px-3 md:py-2 md:table-cell hidden text-left md:align-top '}>
                {/*<div className={'-rotate-90 whitespace-nowrap tracking-widest }>*/}
                    Skills & Tools
                {/*</div>*/}
            </th>
            <td className={'px-3 pb-3'}>
                <Languages/>
                <Technologies/>
                <Tools/>
                <Knowledge/>
            </td>
        </tr>
    );
};

const FeatureTable = ({caption, children}: { caption: string, children: ReactNode | ReactNode[] }) => (
    <table className={'mt-4'}>
        <caption className={'text-lg font-semibold text-left align-top'}>
            {caption}
        </caption>
        <tbody>
        {children}
        </tbody>
    </table>
)
const Heading = ({title}: {title: string}) => (
    <th className={'dark:text-slate-400 dark:font-light font-thin min-w-[100px] text-left align-top'}>
        {title}
    </th>
)
const Data = ({children}: {children: ReactNode[]}) => (
    <td className={'flex flex-wrap gap-1'}>
        {children}
    </td>
)

const Languages = () => (
    <FeatureTable caption={'Languages'}>
        <tr>
            <Heading title={'Frontend'}/>
            <Data>
                <Item label={'HTML'}/>
                <Item label={'CSS'}/>
                <Item label={'JavaScript'}/>
                <Item label={'TypeScript'}/>
            </Data>
        </tr>
        <tr>
            <Heading title={'Backend'}/>
            <Data>
                <Item label={'Java'}/>
                <Item label={'SQL'}/>
                <Item label={'C++'}/>
                <Item label={'C#'}/>
                <Item label={'Python'}/>
                <Item label={'JavaScript'}/>
                <Item label={'TypeScript'}/>
            </Data>
        </tr>
    </FeatureTable>
)

const Technologies = () => (
    <FeatureTable caption={'Technologies'}>
        <tr>
            <Heading title={'Frontend'}/>
            <Data>
                <Item label={'Tailwind CSS'}/>
                <Item label={'React Query'}/>
                <Item label={'Redux Toolkit'}/>
                <Item label={'Zustand'}/>
            </Data>
        </tr>
        <tr>
            <Heading title={'Backend'}/>
            <Data>
                <Item label={'Spring'}/>
                <Item label={'PostgreSQL'}/>
                <Item label={'HTTP/REST'}/>
            </Data>
        </tr>
    </FeatureTable>
)
const Tools = () => (
    <FeatureTable caption={'Tools'}>
        <tr>
            <Heading title={'Coding'}/>
            <Data>
                <Item label={'Git'}/>
                <Item label={'Ubuntu'}/>
            </Data>
        </tr>
    </FeatureTable>
)
const Knowledge = () => (
    <FeatureTable caption={'Knowledge'}>
        <tr>
            <Heading title={'Programming'}/>
            <Data>
                <Item label={'ООП'}/>
                <Item label={'Многопоточность и многозадачность'}/>
                <Item label={'Реляционные базы данных'}/>
            </Data>
        </tr>
        <tr>
            <Heading title={'Computer Science'}/>
            <Data>
                <Item label={'ISO OSI'}/>
                <Item label={'TCP'}/>
                <Item label={'UDP'}/>
                <Item label={'HTTP'}/>
                <Item label={'REST API'}/>
                <Item label={'asm8086'}/>
            </Data>
        </tr>
        <tr>
            <Heading title={'Data structure'}/>
            <Data>
                <Item label={'Стек'}/>
                <Item label={'Очередь'}/>
                <Item label={'Динамический массив'}/>
                <Item label={'Бинарное дерево'}/>
                <Item label={'Хеш-таблица'}/>
            </Data>
        </tr>
    </FeatureTable>
)

export default SkillsTools;