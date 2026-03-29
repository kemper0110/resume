/*
    C++20
    никому не интересно:
        asio(with c++20 coroutines), beast, bimap, circular buffer, Graph library, Intrusive
        asm8086 STL
*/

import {Tag} from "../../components/Tag.tsx";
import {TableContent, TableHeader} from "./Table.tsx";
import tw from "twin.macro";

const SkillsTools = () => {
    return (
        <tr>
            <TableHeader>Skills & Tools</TableHeader>
            <TableContent>
                <table>
                    <tbody>
                    <tr>
                        <Heading>Frontend</Heading>
                        <Data>
                            <Tag>React</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Tailwind CSS</Tag>
                            <Tag>Архитектура сложных UI</Tag>
                        </Data>
                    </tr>
                    <tr>
                        <Heading>Backend</Heading>
                        <Data>
                            <Tag>Node.js</Tag>
                            <Tag>Deno</Tag>
                            <Tag>TypeScript</Tag>
                            <Tag>Java</Tag>
                            <Tag>Golang</Tag>
                            <Tag>Multithreading</Tag>
                            <Tag>Kafka</Tag>
                            <Tag>PostgreSQL</Tag>
                            <Tag>API Design</Tag>
                        </Data>
                    </tr>
                    <tr>
                        <Heading>Infra</Heading>
                        <Data>
                            <Tag>Docker</Tag>
                            <Tag>Kubernetes</Tag>
                            <Tag>Helm</Tag>
                        </Data>
                    </tr>
                    </tbody>
                </table>
            </TableContent>
        </tr>
    );
};

// const FeatureTable = ({caption, children}: { caption: string, children: ReactNode | ReactNode[] }) => (
//     <table tw={'mt-4'}>
//         <caption tw={'text-lg font-semibold text-left align-top'}>
//             {caption}
//         </caption>
//         <tbody>
//         {children}
//         </tbody>
//     </table>
// )
const Heading = tw.th`dark:text-slate-400 dark:font-light font-thin min-w-[100px] text-left align-top`
const Data = tw.td`flex flex-wrap gap-1`

export default SkillsTools;