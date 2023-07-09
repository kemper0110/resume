import {Education} from "./Education.tsx";
import Experience from "./Experience.tsx";
import SkillsTools from "./SkillsTools.tsx";
import {ReactNode} from "react";

export const TableHeader = ({title}: { title: string }) => (
    <th className={'md:px-3 md:py-2 md:table-cell hidden text-left md:align-top'}>
        {title}
    </th>
)

export const TableContent = ({children}: { children: ReactNode | ReactNode[] }) => (
    <td className={'px-3 py-3'}>
        {children}
    </td>
)

const Table = () => {
    return (
        <section>
            <table className={'w-full divide-solid divide-y dark:divide-divideDark divide-divideLight'}>
                <tbody className={'divide-solid divide-y dark:divide-divideDark divide-divideLight'}>
                <Education/>
                <Experience/>
                <SkillsTools/>
                </tbody>
                <tfoot>
                <TableFooter/>
                </tfoot>
            </table>
        </section>
    );
};
const TableFooter = () => (
    <tr>
        <td colSpan={2} className={'text-center pt-3 px-2'}>
            <span className={''}>
                Знаю английский на уровне понимания тех. документации.
                <br/>
                Имею желание изучать новые библиотеки, фреймворки, платформы.
                <br/>
                Развиваюсь в обоих направлениях: frontend и backend.
            </span>
        </td>
    </tr>
)

export default Table;