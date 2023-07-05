import {Education} from "./Education.tsx";
import Experience from "./Experience.tsx";
import SkillsTools from "./SkillsTools.tsx";

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
                <tr className={''}>
                    <td colSpan={2} className={'text-center pt-3'}>
                    <span className={''}>
                        Знаю английский на уровне понимания тех. документации.
                        <br/>
                        Имею желание изучать новые библиотеки, фреймворки, платформы.
                    </span>
                    </td>
                </tr>
                </tfoot>
            </table>
        </section>
    );
};

export default Table;