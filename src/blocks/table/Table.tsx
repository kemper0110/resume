import {Education} from "./Education.tsx";
import Experience from "./Experience.tsx";
import SkillsTools from "./SkillsTools.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tw from "twin.macro";

export const TableHeader = tw.th`md:px-3 md:py-2 md:table-cell hidden text-left md:align-top`
export const TableContent = tw.td`px-3 py-3`

export default function Table() {
    return (
        <section>
            <table tw={'w-full divide-solid divide-y dark:divide-divideDark divide-divideLight'}>
                <tbody tw={'divide-solid divide-y dark:divide-divideDark divide-divideLight'}>
                <Education/>
                <Experience/>
                <SkillsTools/>
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={2} tw={'text-center pt-3 px-2'}>
                        <span tw={'flex flex-col'}>
                            <span>Знаю английский на уровне понимания тех. документации.</span>
                            <span>Имею желание изучать новые библиотеки, фреймворки, платформы.</span>
                            <span>Развиваюсь в обоих направлениях: frontend и backend.</span>
                        </span>
                    </td>
                </tr>
                </tfoot>
            </table>
        </section>
    );
};