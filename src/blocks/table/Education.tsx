import DatePeriod from "../../components/DatePeriod.tsx";

export const Education = () => {
    return (
        <tr>
            <th className={'md:px-3 md:py-2 md:table-cell hidden text-left md:align-top'}>
                {/*<div className={'-rotate-90 whitespace-nowrap tracking-widest text-slate-200'}>*/}
                Образование
                {/*</div>*/}
            </th>
            <td className={'px-3 py-3 flex flex-col'}>
                <div className={'flex flex-wrap justify-between'}>
                    <span className={'font-medium text-2xl'}>Донской Государственный Технический Университет</span>
                    <DatePeriod dateFrom={
                        <time dateTime={'2020-09-01'} className={''}>
                            Сент 2020
                        </time>
                    } dateTo={
                        <time dateTime={'2024-06-01'} className={''}>
                            Июнь 2024
                        </time>
                    }/>
                </div>
                <span className={''}>
                    Бакалавриат - Программная инженерия
                </span>
                <span className={'text-sm font-thin dark:text-slate-400 text-slate-500'}>
                    3 курс, средний балл - 5.0
                </span>
            </td>
        </tr>
    );
};