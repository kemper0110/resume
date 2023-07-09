import DatePeriod from "../../components/DatePeriod.tsx";
import {TableContent, TableHeader} from "./Table.tsx";

export const Education = () => {
    return (
        <tr>
            <TableHeader title={'Образование'}/>
            <TableContent>
                <DGTU/>
                <p>
                    Бакалавриат - Программная инженерия
                </p>
                <p className={'text-sm font-thin dark:text-slate-400 text-slate-500'}>
                    4 курс, средний балл - 5.0
                </p>
            </TableContent>
        </tr>
    );
};

const DGTU = () => (
    <div className={'flex flex-wrap justify-between'}>
        <h2 className={'font-medium text-2xl'}>Донской Государственный Технический Университет</h2>
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
)